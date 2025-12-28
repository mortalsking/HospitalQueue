const admin = require("firebase-admin");
const serviceAccount = require("../service-account.json"); // User must provide this or use `firebase-admin` with default credential if running locally with auth

// Initialize
// For script usage, we typically need a service account if running outside of Cloud Functions environment.
// However, for this hackathon deliverable, we can instruct the user to run this via 'firebase functions:shell' or similar, 
// OR just provide a script that they can run if they have 'GOOGLE_APPLICATION_CREDENTIALS' set.
// A simpler way for the user is to use the Firebase Emulator or Firestore Console.

// Let's create a script that outputs the JSON data so they can import or copy-paste, 
// Or a node script that uses application default credentials (ADC).

const seedData = [
    {
        name: "General Hospital",
        location: { latitude: 40.7128, longitude: -74.0060 }, // GeoPoint format for Firestore
        currentQueue: 12,
        avgServiceTime: 15,
        predictedWait: 180,
        crowdLevel: "red",
        lastUpdated: new Date()
    },
    {
        name: "City Medical Center",
        location: { latitude: 40.7300, longitude: -73.9950 },
        currentQueue: 4,
        avgServiceTime: 12,
        predictedWait: 48,
        crowdLevel: "yellow",
        lastUpdated: new Date()
    },
    {
        name: "Westside Clinic",
        location: { latitude: 40.7500, longitude: -73.9800 },
        currentQueue: 1,
        avgServiceTime: 10,
        predictedWait: 10,
        crowdLevel: "green",
        lastUpdated: new Date()
    }
];

console.log("To seed data, use the Firebase Console to add these documents to the 'hospitals' collection:");
console.log(JSON.stringify(seedData, null, 2));

// If we wanted to automate this, we need 'firebase-admin' setup with credentials.
// For simplicity in a shared codebase without secrets, logging instructions is safer or assuming ADC.
