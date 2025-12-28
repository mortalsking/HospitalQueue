import React from 'react';
import { Clock, Users, MapPin } from 'lucide-react';

export default function HospitalCard({ hospital, onClick }) {
    const { name, currentQueue, predictedWait, crowdLevel, lastUpdated, address } = hospital;

    const formattedTime = lastUpdated?.seconds
        ? new Date(lastUpdated.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        : 'Just now';

    return (
        <div className="card animate-fade-in" onClick={onClick} style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{name}</h3>
                <span className={`badge badge-${crowdLevel}`}>{crowdLevel}</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                    <Users size={18} />
                    <div>
                        <div style={{ fontSize: '0.75rem' }}>Queue</div>
                        <div style={{ fontWeight: 600, color: 'var(--text)' }}>{currentQueue}</div>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)' }}>
                    <Clock size={18} />
                    <div>
                        <div style={{ fontSize: '0.75rem' }}>Est. Wait</div>
                        <div style={{ fontWeight: 600, color: 'var(--text)' }}>{predictedWait} min</div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border)', paddingTop: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <MapPin size={14} /> {address || 'View on Map'}
                </div>
                <span>Updated {formattedTime}</span>
            </div>
        </div>
    );
}
