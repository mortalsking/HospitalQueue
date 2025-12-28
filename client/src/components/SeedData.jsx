import React from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { DUMMY_HOSPITALS } from '../data/dummyHospitals';

export default function SeedData() {
    async function handleSeed() {
        const hospitals = DUMMY_HOSPITALS;

        try {
            for (const hospital of hospitals) {
                await addDoc(collection(db, "hospitals"), {
                    ...hospital,
                    lastUpdated: serverTimestamp()
                });
            }
            alert("Data seeded successfully! Refresh the page.");
        } catch (error) {
            console.error("Error seeding data:", error);
            alert("Failed to seed data. Check console.");
        }
    }

    return (
        <div style={{ padding: '1rem', textAlign: 'center' }}>
            <button onClick={handleSeed} className="btn btn-primary">
                Seed Test Data
            </button>
        </div>
    );
}
