import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export default function AdminDashboard() {
    const [hospitals, setHospitals] = useState([]);
    const [selectedHospital, setSelectedHospital] = useState(null);
    const [newQueue, setNewQueue] = useState('');

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "hospitals"), (snapshot) => {
            setHospitals(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
        return () => unsubscribe();
    }, []);

    async function handleUpdate(e) {
        e.preventDefault();
        if (!selectedHospital || newQueue === '') return;

        try {
            const hospitalRef = doc(db, "hospitals", selectedHospital.id);
            await updateDoc(hospitalRef, {
                currentQueue: parseInt(newQueue),
                lastUpdated: serverTimestamp()
                // ML trigger will handle predictedWait and crowdLevel updates
            });
            setNewQueue('');
            setSelectedHospital(null);
            alert('Queue updated successfully!');
        } catch (err) {
            console.error(err);
            alert('Failed to update queue.');
        }
    }

    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1 style={{ marginBottom: '2rem' }}>Admin Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Select Hospital to Update</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {hospitals.map(hospital => (
                            <div
                                key={hospital.id}
                                className="card"
                                style={{
                                    cursor: 'pointer',
                                    border: selectedHospital?.id === hospital.id ? '2px solid var(--primary)' : '2px solid transparent'
                                }}
                                onClick={() => {
                                    setSelectedHospital(hospital);
                                    setNewQueue(hospital.currentQueue);
                                }}
                            >
                                <div style={{ fontWeight: 600 }}>{hospital.name}</div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Current Queue: {hospital.currentQueue}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    {selectedHospital ? (
                        <div className="card" style={{ position: 'sticky', top: '2rem' }}>
                            <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Update {selectedHospital.name}</h2>
                            <form onSubmit={handleUpdate}>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>New Queue Length</label>
                                    <input
                                        type="number"
                                        className="input"
                                        value={newQueue}
                                        onChange={(e) => setNewQueue(e.target.value)}
                                        min="0"
                                    />
                                </div>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Update Queue</button>
                                    <button
                                        type="button"
                                        className="btn btn-outline"
                                        onClick={() => setSelectedHospital(null)}
                                    >
                                        Cancel
                                    </button>
                                </div>

                                <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--background)', borderRadius: 'var(--radius)', fontSize: '0.875rem' }}>
                                    <p><strong>Note:</strong> Updating the queue will trigger the Cloud Function to recalculate <strong>Predicted Wait Time</strong> and <strong>Crowd Level</strong> via Vertex AI.</p>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', color: 'var(--text-muted)' }}>
                            Select a hospital from the list to update.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
