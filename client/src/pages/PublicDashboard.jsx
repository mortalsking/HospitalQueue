import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import HospitalCard from '../components/HospitalCard';
import QueueTable from '../components/QueueTable';
import MapContainer from '../components/Map';
import SeedData from '../components/SeedData';
import { Search } from 'lucide-react';
import { DUMMY_HOSPITALS } from '../data/dummyHospitals';



export default function PublicDashboard() {
    const [hospitals, setHospitals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [viewMode, setViewMode] = useState('grid'); // grid, table
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        let mounted = true;

        // Force show data after 2 seconds if Firebase hangs
        const timeoutId = setTimeout(() => {
            if (mounted && loading) {
                console.log("Firebase timeout, using dummy data");
                setHospitals(DUMMY_HOSPITALS);
                setLoading(false);
            }
        }, 2000);

        try {
            const q = query(collection(db, "hospitals"), orderBy("name"));
            const unsubscribe = onSnapshot(q, (snapshot) => {
                if (!mounted) return;

                const hospitalsData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                if (hospitalsData.length === 0) {
                    setHospitals(DUMMY_HOSPITALS);
                } else {
                    setHospitals(hospitalsData);
                }
                setLoading(false);
                clearTimeout(timeoutId);
            }, (error) => {
                console.error("Firebase error:", error);
                if (mounted) {
                    setHospitals(DUMMY_HOSPITALS);
                    setLoading(false);
                }
            });

            return () => {
                mounted = false;
                clearTimeout(timeoutId);
                unsubscribe();
            };
        } catch (err) {
            console.error("Setup error:", err);
            if (mounted) {
                setHospitals(DUMMY_HOSPITALS);
                setLoading(false);
            }
        }
    }, []);

    const filteredHospitals = hospitals.filter(h =>
        h.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (h.address && h.address.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="container" style={{ paddingBottom: '4rem' }}>
            <header style={{ margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Find Nearby Care</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Real-time wait times and crowd predictions for hospitals near you.</p>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div style={{ position: 'relative', flex: 1 }}>
                        <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            placeholder="Search by name, city, or street..."
                            className="input"
                            style={{ paddingLeft: '2.5rem' }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button
                            className={`btn ${viewMode === 'grid' ? 'btn-primary' : 'btn-outline'}`}
                            onClick={() => setViewMode('grid')}
                        >
                            Grid View
                        </button>
                        <button
                            className={`btn ${viewMode === 'table' ? 'btn-primary' : 'btn-outline'}`}
                            onClick={() => setViewMode('table')}
                        >
                            List View
                        </button>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3" style={{ marginBottom: '2rem' }}>
                <div style={{ gridColumn: 'span 2' }}>
                    <div className="card" style={{ height: '100%', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Hospital Map</h2>
                        <div style={{ flex: 1 }}>
                            <MapContainer hospitals={filteredHospitals} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card" style={{ height: '100%', background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%)', color: 'white' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Quick Stats</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <div style={{ opacity: 0.8, fontSize: '0.875rem' }}>Active Hospitals</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{hospitals.length}</div>
                            </div>
                            <div>
                                <div style={{ opacity: 0.8, fontSize: '0.875rem' }}>Avg. Wait Time</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>
                                    {Math.round(hospitals.reduce((acc, h) => acc + (h.predictedWait || 0), 0) / (hospitals.length || 1))} m
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '4rem' }}>Loading live data...</div>
            ) : (
                <>
                    {hospitals.length === 0 && <SeedData />}
                    {viewMode === 'grid' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {filteredHospitals.map(hospital => (
                                <HospitalCard key={hospital.id} hospital={hospital} onClick={() => { }} />
                            ))}
                        </div>
                    ) : (
                        <QueueTable hospitals={filteredHospitals} />
                    )}
                </>
            )}
        </div>
    );
}
