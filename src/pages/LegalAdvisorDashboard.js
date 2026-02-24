import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Dashboard.css';

const LegalAdvisorDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  // eslint-disable-next-line no-unused-vars
  const [cases, setCases] = useState([
    { id: 1, name: 'Protection Order', status: 'active', client: 'Client A', dueDate: '2026-03-15' },
    { id: 2, name: 'Custody Case', status: 'pending', client: 'Client B', dueDate: '2026-03-20' },
    { id: 3, name: 'Divorce', status: 'in-progress', client: 'Client C', dueDate: '2026-04-10' },
  ]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Legal Portal</h2>
        <nav className="sidebar-nav">
          <button 
            className={`nav-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            📊 Overview
          </button>
          <button 
            className={`nav-btn ${activeTab === 'cases' ? 'active' : ''}`}
            onClick={() => setActiveTab('cases')}
          >
            📁 Case Management
          </button>
          <button 
            className={`nav-btn ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            📚 Legal Resources
          </button>
          <button 
            className={`nav-btn ${activeTab === 'templates' ? 'active' : ''}`}
            onClick={() => setActiveTab('templates')}
          >
            📄 Document Templates
          </button>
          <button 
            className={`nav-btn ${activeTab === 'consultations' ? 'active' : ''}`}
            onClick={() => setActiveTab('consultations')}
          >
            💼 Consultations
          </button>
          <button 
            className={`nav-btn ${activeTab === 'updates' ? 'active' : ''}`}
            onClick={() => setActiveTab('updates')}
          >
            📰 Legal Updates
          </button>
          <button className="nav-btn logout-btn" onClick={handleLogout}>
            🚪 Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Legal Advisor Dashboard</h1>
          <p>Attorney: <strong>{user?.email}</strong></p>
        </header>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="tab-content">
            <h2>Legal Services Dashboard</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Active Cases</h3>
                <p className="stat-value">18</p>
              </div>
              <div className="stat-card">
                <h3>Consultations This Month</h3>
                <p className="stat-value">12</p>
              </div>
              <div className="stat-card">
                <h3>Cases Resolved</h3>
                <p className="stat-value">45</p>
              </div>
              <div className="stat-card">
                <h3>Client Success Rate</h3>
                <p className="stat-value">87%</p>
              </div>
            </div>

            <div className="info-section">
              <h3>Upcoming Deadlines</h3>
              <ul>
                <li>📅 Protection Order Hearing - March 15, 2026</li>
                <li>📅 Custody Mediation - March 18, 2026</li>
                <li>📅 Document Review - March 22, 2026</li>
                <li>📅 Court Appearance - March 25, 2026</li>
              </ul>
            </div>

            <div className="info-section">
              <h3>Legal Support Areas</h3>
              <ul>
                <li>⚖️ Protective/Restraining Orders</li>
                <li>👨‍👩‍👧 Custody & Guardianship</li>
                <li>💍 Divorce & Separation</li>
                <li>📝 Criminal Proceedings</li>
                <li>🏠 Housing Rights Protection</li>
                <li>💰 Financial & Property Rights</li>
              </ul>
            </div>
          </div>
        )}

        {/* Case Management Tab */}
        {activeTab === 'cases' && (
          <div className="tab-content">
            <h2>Case Management</h2>
            <div className="info-section">
              <h3>My Cases</h3>
              <table className="user-table">
                <thead>
                  <tr>
                    <th>Case Name</th>
                    <th>Status</th>
                    <th>Client</th>
                    <th>Due Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cases.map(caseItem => (
                    <tr key={caseItem.id}>
                      <td>{caseItem.name}</td>
                      <td><span className="status-badge active">{caseItem.status}</span></td>
                      <td>{caseItem.client}</td>
                      <td>{caseItem.dueDate}</td>
                      <td>
                        <button className="action-btn edit">View</button>
                        <button className="action-btn delete">Update</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button className="btn btn-primary">Create New Case</button>

            <div className="info-section">
              <h3>Case Types</h3>
              <div className="case-types">
                <div className="case-type">
                  <h4>Protection Orders</h4>
                  <p>Temporary/Permanent Restraining Orders and Protection from Abuse Orders</p>
                </div>
                <div className="case-type">
                  <h4>Family Law</h4>
                  <p>Custody, visitation, divorce, and separation matters</p>
                </div>
                <div className="case-type">
                  <h4>Criminal Defense</h4>
                  <p>Criminal proceedings where domestic violence is a factor</p>
                </div>
                <div className="case-type">
                  <h4>Housing Rights</h4>
                  <p>Housing discrimination and rights protection</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="tab-content">
            <h2>Legal Resources Database</h2>
            <div className="info-section">
              <h3>Comprehensive Legal Information</h3>
              <div className="legal-resources">
                <div className="resource-item">
                  <h4>📋 Protection Order Laws</h4>
                  <p>State-by-state laws and procedures for obtaining protection orders</p>
                  <button className="btn btn-small">Access Resource</button>
                </div>
                <div className="resource-item">
                  <h4>👨‍⚖️ Custody & Guardianship</h4>
                  <p>Legal standards and procedures for custody arrangements</p>
                  <button className="btn btn-small">Access Resource</button>
                </div>
                <div className="resource-item">
                  <h4>💼 Divorce & Property Rights</h4>
                  <p>Financial aspects and property division in domestic issues</p>
                  <button className="btn btn-small">Access Resource</button>
                </div>
                <div className="resource-item">
                  <h4>🏥 Documentation Standards</h4>
                  <p>Medical and police documentation for legal proceedings</p>
                  <button className="btn btn-small">Access Resource</button>
                </div>
                <div className="resource-item">
                  <h4>⚖️ Criminal Law</h4>
                  <p>Criminal codes and procedures related to domestic violence</p>
                  <button className="btn btn-small">Access Resource</button>
                </div>
                <div className="resource-item">
                  <h4>🏠 Housing Laws</h4>
                  <p>Tenant rights and housing discrimination protection</p>
                  <button className="btn btn-small">Access Resource</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <div className="tab-content">
            <h2>Legal Document Templates</h2>
            <div className="info-section">
              <h3>Document Templates Library</h3>
              <div className="templates-grid">
                <div className="template-card">
                  <h4>📄 Protection Order Request</h4>
                  <p>Template for requesting a protection order</p>
                  <button className="btn btn-small">Download</button>
                </div>
                <div className="template-card">
                  <h4>📋 Custody Petition</h4>
                  <p>Court petition for custody modification</p>
                  <button className="btn btn-small">Download</button>
                </div>
                <div className="template-card">
                  <h4>💍 Divorce Petition</h4>
                  <p>Initial divorce filing documents</p>
                  <button className="btn btn-small">Download</button>
                </div>
                <div className="template-card">
                  <h4>📝 Client Intake Form</h4>
                  <p>Standardized client information form</p>
                  <button className="btn btn-small">Download</button>
                </div>
                <div className="template-card">
                  <h4>📊 Case Summary</h4>
                  <p>Case summary and status report template</p>
                  <button className="btn btn-small">Download</button>
                </div>
                <div className="template-card">
                  <h4>⚠️ Safety Plan</h4>
                  <p>Legal safety planning template</p>
                  <button className="btn btn-small">Download</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Consultations Tab */}
        {activeTab === 'consultations' && (
          <div className="tab-content">
            <h2>Consultation Management</h2>
            <div className="info-section">
              <h3>Schedule & Manage Consultations</h3>
              
              <div className="consultation-form">
                <h4>Request New Consultation</h4>
                <div className="form-group">
                  <label>Client Name:</label>
                  <input type="text" placeholder="Enter client name" />
                </div>

                <div className="form-group">
                  <label>Case Type:</label>
                  <select>
                    <option>Protection Order</option>
                    <option>Custody</option>
                    <option>Divorce</option>
                    <option>Criminal Defense</option>
                    <option>Housing Rights</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Preferred Date & Time:</label>
                  <input type="datetime-local" />
                </div>

                <div className="form-group">
                  <label>Consultation Details:</label>
                  <textarea placeholder="Description of case and client needs..."></textarea>
                </div>

                <button className="btn btn-primary">Schedule Consultation</button>
              </div>

              <div className="info-section">
                <h3>Consultation Guidelines</h3>
                <ul>
                  <li>Initial consultation: 60 minutes</li>
                  <li>Follow-up consultations: 30-45 minutes</li>
                  <li>All consultations are confidential and privileged</li>
                  <li>Maintain detailed consultation notes</li>
                  <li>Provide written agreements to clients</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Legal Updates Tab */}
        {activeTab === 'updates' && (
          <div className="tab-content">
            <h2>Legal Updates & News</h2>
            <div className="info-section">
              <h3>Recent Legal Changes & Updates</h3>
              
              <div className="update-item">
                <h4>📰 New State Legislation (March 2026)</h4>
                <p><strong>Enhanced Protection Order Standards</strong></p>
                <p>New law expands protection order eligibility to include dating relationships and employment-related abuse.</p>
                <p className="date">Published: March 1, 2026</p>
              </div>

              <div className="update-item">
                <h4>📰 Court Ruling Update</h4>
                <p><strong>Custody Presumption in DV Cases</strong></p>
                <p>State Supreme Court ruling on custody considerations in domestic violence situations.</p>
                <p className="date">Published: February 28, 2026</p>
              </div>

              <div className="update-item">
                <h4>📰 Policy Announcement</h4>
                <p><strong>Expanded Legal Aid Services</strong></p>
                <p>Increased funding for legal aid in domestic violence cases effective immediately.</p>
                <p className="date">Published: February 25, 2026</p>
              </div>

              <h3>Subscribe to Updates</h3>
              <p>Get notified of important legal updates and changes</p>
              <button className="btn btn-primary">Subscribe to Newsletter</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default LegalAdvisorDashboard;
