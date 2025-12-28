const { onRequest } = require("firebase-functions/v2/https");
const { onDocumentUpdated } = require("firebase-functions/v2/firestore");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

/**
 * Triggered when a hospital document is updated.
 * Checks if 'currentQueue' changed.
 * Calculates wait time locally.
 * Updates 'predictedWait', 'crowdLevel', and 'priority'.
 */
exports.onHospitalUpdate = onDocumentUpdated("hospitals/{hospitalId}", async (event) => {
    const newData = event.data.after.data();
    const oldData = event.data.before.data();
    const hospitalId = event.params.hospitalId;

    // Avoid infinite loops - check if queue or relevant fields changed
    if (newData.currentQueue === oldData.currentQueue && newData.lastUpdated.isEqual(oldData.lastUpdated)) {
        return null;
    }

    // Also avoid triggering if WE just updated the prediction (check if only predictedWait changed)
    if (newData.predictedWait !== oldData.predictedWait && newData.currentQueue === oldData.currentQueue) {
        return null;
    }

    logger.info(`Hospital ${hospitalId} updated. Queue: ${newData.currentQueue}`);

    try {
        const queueLength = newData.currentQueue || 0;
        const avgServiceTime = newData.avgServiceTime || 15; // default 15 mins

        // 1. Calculate Predicted Wait Time (Local Logic)
        // Simple deterministic formula: Queue Length * Average Service Time
        // We can add a small random variance if desired, but deterministic is better for testing.
        const predictedWaitTime = queueLength * avgServiceTime;

        // 2. Determine Crowd Level
        let crowdLevel = "green";
        if (predictedWaitTime > 60) crowdLevel = "red";
        else if (predictedWaitTime > 30) crowdLevel = "yellow";

        // 3. Determine Priority (Simple Heuristic)
        // If wait time is high, priority is High.
        let priority = "Normal";
        if (predictedWaitTime > 60) priority = "High";
        else if (predictedWaitTime > 30) priority = "Medium";

        // 4. Update Firestore
        // Must use 'update' to avoid overwriting invalidating data
        await event.data.after.ref.update({
            predictedWait: predictedWaitTime,
            crowdLevel: crowdLevel,
            priority: priority
        });

        logger.info(`Updated Hospital ${hospitalId}: Wait ${predictedWaitTime}m, Level ${crowdLevel}, Priority ${priority}`);

    } catch (error) {
        logger.error("Error in onHospitalUpdate", error);
    }
});
