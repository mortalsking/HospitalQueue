import React from 'react';

export default function QueueTable({ hospitals }) {
    if (!hospitals || hospitals.length === 0) {
        return <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>No hospitals found.</div>;
    }

    return (
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead style={{ background: 'var(--background)', borderBottom: '1px solid var(--border)' }}>
                        <tr>
                            <th style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 600 }}>Hospital Name</th>
                            <th style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 600 }}>Queue</th>
                            <th style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 600 }}>Est. Wait</th>
                            <th style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 600 }}>Crowd Level</th>
                            <th style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 600 }}>Last Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hospitals.map((hospital) => (
                            <tr key={hospital.id} style={{ borderBottom: '1px solid var(--border)' }}>
                                <td style={{ padding: '1rem', fontWeight: 500 }}>{hospital.name}</td>
                                <td style={{ padding: '1rem' }}>{hospital.currentQueue}</td>
                                <td style={{ padding: '1rem', color: 'var(--primary)', fontWeight: 600 }}>{hospital.predictedWait} min</td>
                                <td style={{ padding: '1rem' }}>
                                    <span className={`badge badge-${hospital.crowdLevel}`}>{hospital.crowdLevel}</span>
                                </td>
                                <td style={{ padding: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                    {hospital.lastUpdated?.seconds
                                        ? new Date(hospital.lastUpdated.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                                        : 'Just now'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
