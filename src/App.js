import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import VictimDashboard from './pages/VictimDashboard';
import CounsellorDashboard from './pages/CounsellorDashboard';
import LegalAdvisorDashboard from './pages/LegalAdvisorDashboard';
import './i18n/config';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          
          <Route 
            path="/dashboard/admin" 
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/dashboard/victim" 
            element={
              <ProtectedRoute requiredRole="victim">
                <VictimDashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/dashboard/counsellor" 
            element={
              <ProtectedRoute requiredRole="counsellor">
                <CounsellorDashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/dashboard/legal" 
            element={
              <ProtectedRoute requiredRole="legal">
                <LegalAdvisorDashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
