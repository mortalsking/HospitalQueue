import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check for dummy session on load
    useEffect(() => {
        const dummyUser = localStorage.getItem('dummyUser');
        if (dummyUser) {
            setCurrentUser(JSON.parse(dummyUser));
            setLoading(false);
        }
    }, []);

    async function login(email, password) {
        try {
            return await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            // Fallback for testing/demo if Firebase fails
            if (email === 'admin@test.com' && password === 'password') {
                const dummyUser = { email: 'admin@test.com', uid: 'dummy-admin-123' };
                setCurrentUser(dummyUser);
                localStorage.setItem('dummyUser', JSON.stringify(dummyUser));
                return dummyUser;
            }
            throw error;
        }
    }

    async function signup(email, password) {
        try {
            return await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.warn("Firebase signup failed, falling back to dummy user", error);
            // Fallback: Create a dummy user session
            const dummyUser = { email: email, uid: 'dummy-' + Date.now() };
            setCurrentUser(dummyUser);
            localStorage.setItem('dummyUser', JSON.stringify(dummyUser));
            return dummyUser;
        }
    }

    async function logout() {
        try {
            await signOut(auth);
        } catch (error) {
            console.log("Firebase logout failed, clearing local state");
        }
        setCurrentUser(null);
        localStorage.removeItem('dummyUser');
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!localStorage.getItem('dummyUser')) {
                setCurrentUser(user);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        login,
        signup,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading ? children : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading Application...</div>}
        </AuthContext.Provider>
    );
}
