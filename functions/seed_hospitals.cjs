const admin = require("firebase-admin");

// Initialize Firebase Admin
// Note: This requires GOOGLE_APPLICATION_CREDENTIALS to be set, 
// OR running in an environment where it can auto-discover credentials (like Cloud Shell or with 'firebase login')
// For local development without a service account key, we might need to use the client SDK or run this via 'firebase functions:shell'.
// However, since we are using 'firebase-admin', let's try to use the default credentials.

// If this fails, we will guide the user to add data manually via the Firebase Console or use a client-side seeder.

try {
    const serviceAccount = require("./serviceAccountKey.json");
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
} catch (e) {
    console.log("Service account not found, trying default credentials...");
    admin.initializeApp();
}

const db = admin.firestore();

const hospitals = [
    {
        name: "City General Hospital",
        location: { lat: 40.7128, lng: -74.0060 },
        currentQueue: 10,
        avgServiceTime: 15,
        predictedWait: 150,
        crowdLevel: "red",
        priority: "High",
        lastUpdated: admin.firestore.FieldValue.serverTimestamp()
    },
    {
        name: "St. Mary's Medical Center",
        location: { lat: 40.7300, lng: -73.9950 },
        currentQueue: 2,
        avgServiceTime: 12,
        predictedWait: 24,
        crowdLevel: "green",
        priority: "Normal",
        lastUpdated: admin.firestore.FieldValue.serverTimestamp()
    },
    {
        name: "Downtown Urgent Care",
        location: { lat: 40.7500, lng: -73.9800 },
        currentQueue: 5,
        avgServiceTime: 10,
        predictedWait: 50,
        crowdLevel: "yellow",
        priority: "Medium",
        lastUpdated: admin.firestore.FieldValue.serverTimestamp()
    }
];

async function seed() {
    console.log("Seeding hospitals...");
    const batch = db.batch();

    for (const hospital of hospitals) {
        const ref = db.collection("hospitals").doc();
        batch.set(ref, hospital);
    }

    await batch.commit();
    console.log("Seeding complete!");
}

seed().catch(console.error);
