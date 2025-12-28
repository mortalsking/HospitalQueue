import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Activity, LogOut, User } from 'lucide-react';

export default function Navbar() {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            await logout();
            navigate('/login');
        } catch {
            console.error("Failed to log out");
        }
    }

    return (
        <nav style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', padding: '1rem 0' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.25rem' }}>
                    <Activity size={24} />
                    <span>QueueLive</span>
                </Link>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <Link to="/" className="btn btn-outline" style={{ border: 'none' }}>Dashboard</Link>

                    {currentUser ? (
                        <>
                            {currentUser.email === 'admin@test.com' && (
                                <Link to="/admin" className="btn btn-primary">
                                    Admin Panel
                                </Link>
                            )}
                            <button onClick={handleLogout} className="btn btn-outline">
                                <LogOut size={16} />
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="btn btn-outline">
                            <User size={16} /> Admin Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}
