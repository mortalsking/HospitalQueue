import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import PublicDashboard from './pages/PublicDashboard';
import AdminLogin from './pages/AdminLogin';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  if (!currentUser) return <Navigate to="/login" />;
  if (currentUser.email !== 'admin@test.com') return <Navigate to="/" />;
  return children;
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<PublicDashboard />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
