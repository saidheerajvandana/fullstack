import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Dashboard.css';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([
    { id: 1, email: 'victim@example.com', role: 'victim', status: 'active' },
    { id: 2, email: 'counsellor@example.com', role: 'counsellor', status: 'active' },
    { id: 3, email: 'legal@example.com', role: 'legal', status: 'active' },
  ]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <nav className="sidebar-nav">
          <button 
            className={`nav-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            📊 Overview
          </button>
          <button 
            className={`nav-btn ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            👥 User Management
          </button>
          <button 
            className={`nav-btn ${activeTab === 'content' ? 'active' : ''}`}
            onClick={() => setActiveTab('content')}
          >
            📄 Content Management
          </button>
          <button 
            className={`nav-btn ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            🔒 Security
          </button>
          <button 
            className={`nav-btn ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            📈 Analytics
          </button>
          <button className="nav-btn logout-btn" onClick={handleLogout}>
            🚪 Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p>Logged in as: <strong>{user?.email}</strong></p>
        </header>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="tab-content">
            <h2>System Overview</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Total Users</h3>
                <p className="stat-value">245</p>
                <span className="stat-label">Active accounts</span>
              </div>
              <div className="stat-card">
                <h3>Victims/Survivors</h3>
                <p className="stat-value">150</p>
                <span className="stat-label">Seeking support</span>
              </div>
              <div className="stat-card">
                <h3>Counselors</h3>
                <p className="stat-value">45</p>
                <span className="stat-label">Available</span>
              </div>
              <div className="stat-card">
                <h3>Legal Advisors</h3>
                <p className="stat-value">30</p>
                <span className="stat-label">On platform</span>
              </div>
            </div>

            <div className="info-section">
              <h3>System Health</h3>
              <ul>
                <li>✅ Database: Operational</li>
                <li>✅ Email Service: Operational</li>
                <li>✅ Security: High (256-bit encryption)</li>
                <li>✅ Uptime: 99.9%</li>
              </ul>
            </div>
          </div>
        )}

        {/* User Management Tab */}
        {activeTab === 'users' && (
          <div className="tab-content">
            <h2>User Management</h2>
            <div className="info-section">
              <h3>Registered Users</h3>
              <table className="user-table">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(u => (
                    <tr key={u.id}>
                      <td>{u.email}</td>
                      <td><span className="role-badge">{u.role}</span></td>
                      <td><span className="status-badge active">{u.status}</span></td>
                      <td>
                        <button className="action-btn edit">Edit</button>
                        <button className="action-btn delete">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="btn btn-primary">Add New User</button>
          </div>
        )}

        {/* Content Management Tab */}
        {activeTab === 'content' && (
          <div className="tab-content">
            <h2>Content Management</h2>
            <div className="info-section">
              <h3>Manage Platform Resources</h3>
              <ul>
                <li>Legal Rights Documentation</li>
                <li>Support Services Directory</li>
                <li>FAQ Database</li>
                <li>Help Resources</li>
                <li>Community Guidelines</li>
              </ul>
            </div>
            <button className="btn btn-primary">Edit Content</button>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className="tab-content">
            <h2>Security Management</h2>
            <div className="info-section">
              <h3>Security Status</h3>
              <ul>
                <li>🔒 SSL/TLS: Enabled</li>
                <li>🔐 Data Encryption: AES-256</li>
                <li>🛡️ Firewall: Active</li>
                <li>🔑 Two-Factor Authentication: Available</li>
                <li>📝 Audit Logs: Maintained</li>
                <li>🚨 Last Security Audit: 7 days ago</li>
              </ul>
            </div>
            <button className="btn btn-primary">Run Security Check</button>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="tab-content">
            <h2>Platform Analytics</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Monthly Active Users</h3>
                <p className="stat-value">180</p>
              </div>
              <div className="stat-card">
                <h3>Total Resources Viewed</h3>
                <p className="stat-value">3,245</p>
              </div>
              <div className="stat-card">
                <h3>Support Sessions</h3>
                <p className="stat-value">456</p>
              </div>
              <div className="stat-card">
                <h3>Legal Consultations</h3>
                <p className="stat-value">78</p>
              </div>
            </div>
            <div className="info-section">
              <h3>Top Resources</h3>
              <ol>
                <li>Protection Orders Process - 456 views</li>
                <li>Safety Planning Guide - 398 views</li>
                <li>Legal Rights Overview - 287 views</li>
              </ol>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
