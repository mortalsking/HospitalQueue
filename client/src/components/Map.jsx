import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

export default function MapComponent({ hospitals }) {
    // Default center (New York) if no hospitals
    const defaultCenter = [40.7128, -74.0060];
    const center = hospitals.length > 0 ? [hospitals[0].location.lat, hospitals[0].location.lng] : defaultCenter;
    const zoom = 13;

    return (
        <div className="card" style={{ height: '400px', padding: 0, overflow: 'hidden' }}>
            <MapContainer key={`${center[0]}-${center[1]}`} center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
                <ChangeView center={center} zoom={zoom} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {hospitals.map((hospital) => (
                    <Marker
                        key={hospital.id}
                        position={[hospital.location.lat, hospital.location.lng]}
                    >
                        <Popup>
                            <div style={{ textAlign: 'center' }}>
                                <strong>{hospital.name}</strong><br />
                                Wait: {hospital.predictedWait} min<br />
                                <span className={`badge badge-${hospital.crowdLevel}`}>{hospital.crowdLevel}</span>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
