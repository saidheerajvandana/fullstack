import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Dashboard.css';

const CounsellorDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  // eslint-disable-next-line no-unused-vars
  const [clients, setClients] = useState([
    { id: 1, name: 'Client A', status: 'active', sessions: 5, lastContact: '2 days ago' },
    { id: 2, name: 'Client B', status: 'active', sessions: 3, lastContact: '1 day ago' },
    { id: 3, name: 'Client C', status: 'follow-up', sessions: 7, lastContact: '1 week ago' },
  ]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Counselor Portal</h2>
        <nav className="sidebar-nav">
          <button 
            className={`nav-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            📊 Overview
          </button>
          <button 
            className={`nav-btn ${activeTab === 'clients' ? 'active' : ''}`}
            onClick={() => setActiveTab('clients')}
          >
            👥 My Clients
          </button>
          <button 
            className={`nav-btn ${activeTab === 'sessions' ? 'active' : ''}`}
            onClick={() => setActiveTab('sessions')}
          >
            📅 Sessions
          </button>
          <button 
            className={`nav-btn ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            📚 Resources
          </button>
          <button 
            className={`nav-btn ${activeTab === 'progress' ? 'active' : ''}`}
            onClick={() => setActiveTab('progress')}
          >
            📈 Progress Tracking
          </button>
          <button 
            className={`nav-btn ${activeTab === 'documentation' ? 'active' : ''}`}
            onClick={() => setActiveTab('documentation')}
          >
            📝 Documentation
          </button>
          <button className="nav-btn logout-btn" onClick={handleLogout}>
            🚪 Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Counselor Dashboard</h1>
          <p>Professional: <strong>{user?.email}</strong></p>
        </header>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="tab-content">
            <h2>Welcome to Your Dashboard</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Active Clients</h3>
                <p className="stat-value">12</p>
              </div>
              <div className="stat-card">
                <h3>Sessions This Month</h3>
                <p className="stat-value">24</p>
              </div>
              <div className="stat-card">
                <h3>Pending Follow-ups</h3>
                <p className="stat-value">5</p>
              </div>
              <div className="stat-card">
                <h3>Client Satisfaction</h3>
                <p className="stat-value">92%</p>
              </div>
            </div>

            <div className="info-section">
              <h3>Today's Schedule</h3>
              <ul>
                <li>10:00 AM - Session with Client A</li>
                <li>11:30 AM - Case Review Meeting</li>
                <li>2:00 PM - Session with Client B</li>
                <li>3:30 PM - Documentation & Notes</li>
              </ul>
            </div>

            <div className="info-section">
              <h3>Quick Resources</h3>
              <ul>
                <li>📋 Counseling Session Templates</li>
                <li>🔗 Resource Directory</li>
                <li>📖 Training & Development Materials</li>
                <li>💾 Case Management Guidelines</li>
              </ul>
            </div>
          </div>
        )}

        {/* Clients Tab */}
        {activeTab === 'clients' && (
          <div className="tab-content">
            <h2>Client Management</h2>
            <div className="info-section">
              <h3>My Clients</h3>
              <table className="user-table">
                <thead>
                  <tr>
                    <th>Client Name</th>
                    <th>Status</th>
                    <th>Sessions</th>
                    <th>Last Contact</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map(client => (
                    <tr key={client.id}>
                      <td>{client.name}</td>
                      <td><span className="status-badge active">{client.status}</span></td>
                      <td>{client.sessions}</td>
                      <td>{client.lastContact}</td>
                      <td>
                        <button className="action-btn edit">View</button>
                        <button className="action-btn delete">Contact</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="btn btn-primary">Add New Client</button>
          </div>
        )}

        {/* Sessions Tab */}
        {activeTab === 'sessions' && (
          <div className="tab-content">
            <h2>Session Management</h2>
            <div className="info-section">
              <h3>Schedule & Manage Sessions</h3>
              <div className="session-info">
                <h4>Session Documentation</h4>
                <ul>
                  <li>📝 Session Notes Template</li>
                  <li>📊 Progress Assessment Form</li>
                  <li>🎯 Treatment Plan Update</li>
                  <li>📋 Session Summary Report</li>
                </ul>
              </div>

              <h4>Quick Session Details</h4>
              <div className="session-form">
                <label>Client:</label>
                <select>
                  <option>Select a client...</option>
                  <option>Client A</option>
                  <option>Client B</option>
                </select>

                <label>Date & Time:</label>
                <input type="datetime-local" />

                <label>Session Type:</label>
                <select>
                  <option>Individual</option>
                  <option>Group</option>
                  <option>Crisis</option>
                </select>

                <button className="btn btn-primary">Schedule Session</button>
              </div>
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="tab-content">
            <h2>Counseling Resources</h2>
            <div className="info-section">
              <h3>Professional Resources</h3>
              <div className="resources-grid">
                <div className="resource-card">
                  <h4>Trauma-Informed Care Guidelines</h4>
                  <p>Best practices for supporting trauma survivors</p>
                </div>
                <div className="resource-card">
                  <h4>Therapeutic Techniques</h4>
                  <p>Evidence-based counseling approaches</p>
                </div>
                <div className="resource-card">
                  <h4>Safety Planning Resources</h4>
                  <p>Help clients develop comprehensive safety plans</p>
                </div>
                <div className="resource-card">
                  <h4>Crisis Intervention</h4>
                  <p>Protocols for crisis situations</p>
                </div>
              </div>

              <h3>Community Resources</h3>
              <ul>
                <li>🏥 Local Healthcare Providers</li>
                <li>🏘️ Emergency Shelters</li>
                <li>⚖️ Legal Services</li>
                <li>👶 Child Care Services</li>
                <li>💼 Employment Assistance</li>
              </ul>
            </div>
          </div>
        )}

        {/* Progress Tracking Tab */}
        {activeTab === 'progress' && (
          <div className="tab-content">
            <h2>Client Progress Tracking</h2>
            <div className="info-section">
              <h3>Monitor and Document Progress</h3>
              <div className="tracking-form">
                <div className="form-group">
                  <label>Select Client:</label>
                  <select>
                    <option>Client A</option>
                    <option>Client B</option>
                    <option>Client C</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Progress Assessment:</label>
                  <textarea placeholder="Document client progress, achievements, and areas for improvement..."></textarea>
                </div>

                <div className="form-group">
                  <label>Current Goals Status:</label>
                  <div>
                    <label><input type="checkbox" /> Goal 1: Safety established</label><br/>
                    <label><input type="checkbox" /> Goal 2: Building support network</label><br/>
                    <label><input type="checkbox" /> Goal 3: Processing trauma</label>
                  </div>
                </div>

                <div className="form-group">
                  <label>Next Steps:</label>
                  <textarea placeholder="Outline next counseling objectives..."></textarea>
                </div>

                <button className="btn btn-primary">Save Progress Update</button>
              </div>
            </div>
          </div>
        )}

        {/* Documentation Tab */}
        {activeTab === 'documentation' && (
          <div className="tab-content">
            <h2>Case Documentation</h2>
            <div className="info-section">
              <h3>Create & Manage Case Files</h3>
              <ul>
                <li>📄 Intake Forms</li>
                <li>📝 Session Notes</li>
                <li>📊 Assessment Reports</li>
                <li>🎯 Treatment Plans</li>
                <li>📋 Progress Notes</li>
                <li>📑 Discharge Summary</li>
              </ul>

              <h3>Documentation Standards</h3>
              <ul>
                <li>All sessions must be documented within 24 hours</li>
                <li>Use encrypted storage for sensitive information</li>
                <li>Follow HIPAA and privacy guidelines</li>
                <li>Maintain client confidentiality</li>
                <li>Update treatment plans regularly</li>
              </ul>

              <button className="btn btn-primary">Create New Case File</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CounsellorDashboard;
