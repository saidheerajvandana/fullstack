import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Dashboard.css';

const VictimDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [resources, setResources] = useState([
    { id: 1, title: 'Protection Orders', description: 'Learn about legal protection orders', category: 'legal' },
    { id: 2, title: 'Safety Planning', description: 'Create a personalized safety plan', category: 'safety' },
    { id: 3, title: 'Health Resources', description: 'Access health and wellness information', category: 'health' },
    { id: 4, title: 'Support Services', description: 'Find local support organizations', category: 'support' },
  ]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>My Account</h2>
        <nav className="sidebar-nav">
          <button 
            className={`nav-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            📋 Overview
          </button>
          <button 
            className={`nav-btn ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            📚 Resources
          </button>
          <button 
            className={`nav-btn ${activeTab === 'counseling' ? 'active' : ''}`}
            onClick={() => setActiveTab('counseling')}
          >
            💬 Get Counseling
          </button>
          <button 
            className={`nav-btn ${activeTab === 'legal' ? 'active' : ''}`}
            onClick={() => setActiveTab('legal')}
          >
            ⚖️ Legal Help
          </button>
          <button 
            className={`nav-btn ${activeTab === 'safety' ? 'active' : ''}`}
            onClick={() => setActiveTab('safety')}
          >
            🛡️ Safety Plan
          </button>
          <button className="nav-btn logout-btn" onClick={handleLogout}>
            🚪 Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Survivor Support Dashboard</h1>
          <p>Welcome, we're here to support you</p>
        </header>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="tab-content">
            <h2>Your Support Journey</h2>
            <div className="priority-alert">
              <strong>🆘 In Crisis?</strong> Call National DV Hotline: <strong>1-800-799-7233</strong>
            </div>

            <div className="info-section">
              <h3>Quick Actions</h3>
              <div className="action-buttons">
                <button className="btn btn-primary">Chat with Counselor</button>
                <button className="btn btn-secondary">Browse Resources</button>
                <button className="btn btn-secondary">Schedule Consultation</button>
                <button className="btn btn-secondary">My Safety Plan</button>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <h3>Resources Saved</h3>
                <p className="stat-value">8</p>
              </div>
              <div className="stat-card">
                <h3>Sessions Completed</h3>
                <p className="stat-value">3</p>
              </div>
              <div className="stat-card">
                <h3>Counselor Assigned</h3>
                <p className="stat-value">Yes</p>
              </div>
            </div>

            <div className="info-section">
              <h3>Your Rights</h3>
              <ul>
                <li>✓ Right to safety and protection</li>
                <li>✓ Right to access support services</li>
                <li>✓ Right to legal protection</li>
                <li>✓ Right to confidentiality</li>
                <li>✓ Right to free legal counsel</li>
                <li>✓ Right to healing and recovery</li>
              </ul>
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="tab-content">
            <h2>Support Resources</h2>
            <div className="resources-list">
              {resources.map(resource => (
                <div key={resource.id} className="resource-card">
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <span className="resource-category">{resource.category}</span>
                  <button className="btn btn-small">Learn More</button>
                </div>
              ))}
            </div>

            <div className="info-section">
              <h3>Additional Resources</h3>
              <ul>
                <li>📞 National Domestic Violence Hotline: 1-800-799-7233</li>
                <li>💬 Crisis Text Line: Text START to 88788</li>
                <li>🏥 Hospital & Medical Services</li>
                <li>🏘️ Shelter & Housing Assistance</li>
                <li>📚 Legal Information & Rights</li>
                <li>👶 Children & Family Support</li>
              </ul>
            </div>
          </div>
        )}

        {/* Counseling Tab */}
        {activeTab === 'counseling' && (
          <div className="tab-content">
            <h2>Counseling Support</h2>
            <div className="info-section">
              <h3>Get Professional Support</h3>
              <p>Our trained counselors are here to listen and support you through your journey.</p>
              
              <div className="counselor-info">
                <h4>Your Assigned Counselor</h4>
                <div className="card">
                  <p><strong>Name:</strong> Sarah Johnson, LCSW</p>
                  <p><strong>Specialization:</strong> Domestic Violence Trauma</p>
                  <p><strong>Available:</strong> Mon-Fri, 9am-5pm</p>
                  <button className="btn btn-primary">Chat Now</button>
                  <button className="btn btn-secondary">Schedule Appointment</button>
                </div>
              </div>

              <h4>Available Support Options</h4>
              <ul>
                <li>🎯 One-on-one counseling sessions</li>
                <li>👥 Support group meetings</li>
                <li>📞 Crisis support hotline</li>
                <li>💭 Trauma recovery programs</li>
                <li>🧠 Mental health resources</li>
              </ul>
            </div>
          </div>
        )}

        {/* Legal Help Tab */}
        {activeTab === 'legal' && (
          <div className="tab-content">
            <h2>Legal Assistance</h2>
            <div className="info-section">
              <h3>Your Legal Rights & Options</h3>
              
              <div className="legal-options">
                <div className="legal-card">
                  <h4>Protection Orders</h4>
                  <p>Learn about restraining orders and protective orders</p>
                  <button className="btn btn-small">Learn More</button>
                </div>
                <div className="legal-card">
                  <h4>Custody & Divorce</h4>
                  <p>Information on custody arrangements and divorce proceedings</p>
                  <button className="btn btn-small">Learn More</button>
                </div>
                <div className="legal-card">
                  <h4>Criminal Rights</h4>
                  <p>Understand your rights in criminal proceedings</p>
                  <button className="btn btn-small">Learn More</button>
                </div>
                <div className="legal-card">
                  <h4>Housing Rights</h4>
                  <p>Learn about housing discrimination and assistance programs</p>
                  <button className="btn btn-small">Learn More</button>
                </div>
              </div>

              <h4>Consult with Legal Advisor</h4>
              <p>Schedule a free confidential consultation with our legal advisors</p>
              <button className="btn btn-primary">Request Legal Consultation</button>
            </div>
          </div>
        )}

        {/* Safety Plan Tab */}
        {activeTab === 'safety' && (
          <div className="tab-content">
            <h2>My Safety Plan</h2>
            <div className="info-section">
              <h3>Create Your Personal Safety Plan</h3>
              <p>A safety plan is a personalized list of resources and strategies to stay safe.</p>

              <div className="safety-sections">
                <div className="safety-item">
                  <h4>1. Warning Signs</h4>
                  <p>Identify behaviors that signal increased danger</p>
                  <textarea placeholder="List warning signs..."></textarea>
                </div>

                <div className="safety-item">
                  <h4>2. Safe Spaces</h4>
                  <p>Identify places you can go if you need to leave quickly</p>
                  <textarea placeholder="List safe locations..."></textarea>
                </div>

                <div className="safety-item">
                  <h4>3. Important Contacts</h4>
                  <p>List trusted people who can help</p>
                  <textarea placeholder="List contacts and phone numbers..."></textarea>
                </div>

                <div className="safety-item">
                  <h4>4. Documents to Keep Safe</h4>
                  <p>Important documents to have access to if you need to leave</p>
                  <textarea placeholder="ID, birth certificates, financial records, etc..."></textarea>
                </div>

                <div className="safety-item">
                  <h4>5. Money & Finances</h4>
                  <p>Financial resources available to you</p>
                  <textarea placeholder="Savings accounts, emergency funds, etc..."></textarea>
                </div>
              </div>

              <button className="btn btn-primary">Save My Plan</button>
              <button className="btn btn-secondary">Print Plan</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default VictimDashboard;
