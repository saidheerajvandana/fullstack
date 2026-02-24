import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import LanguageSwitcher from '../components/LanguageSwitcher';
import '../styles/Home.css';

const Home = () => {
  const { isAuthenticated } = useAuth();
  const { t } = useTranslation();

  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-brand">
          <h1>🤝 {t('home.title')}</h1>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">{t('navbar.home')}</Link>
          {isAuthenticated ? (
            <Link to="/profile" className="nav-link">{t('navbar.profile')}</Link>
          ) : (
            <Link to="/login" className="nav-link login-btn">{t('navbar.login')}</Link>
          )}
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2>{t('home.tagline')}</h2>
          <p>{t('home.description')}</p>
          <div className="hero-buttons">
            <Link to="/login" className="btn btn-primary">{t('home.getHelp')}</Link>
            <a href="#about" className="btn btn-secondary">{t('home.learnMore')}</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>{t('home.about')}</h2>
        <p>{t('home.aboutDesc')}</p>
        <div className="features-grid">
          <div className="feature-card">
            <h3>📚 {t('home.features.resources')}</h3>
            <p>{t('home.features.resourcesDesc')}</p>
          </div>
          <div className="feature-card">
            <h3>💬 {t('home.features.counseling')}</h3>
            <p>{t('home.features.counselingDesc')}</p>
          </div>
          <div className="feature-card">
            <h3>⚖️ {t('home.features.legal')}</h3>
            <p>{t('home.features.legalDesc')}</p>
          </div>
          <div className="feature-card">
            <h3>🔒 {t('home.features.safety')}</h3>
            <p>{t('home.features.safetyDesc')}</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>{t('services.title')}</h2>
        
        <div className="service-container">
          <div className="service">
            <h3>🆘 {t('services.victims.title')}</h3>
            <ul>
              {t('services.victims.items', { returnObjects: true }).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="service">
            <h3>👥 {t('services.counselors.title')}</h3>
            <ul>
              {t('services.counselors.items', { returnObjects: true }).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="service">
            <h3>⚖️ {t('services.legal.title')}</h3>
            <ul>
              {t('services.legal.items', { returnObjects: true }).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="service">
            <h3>⚙️ {t('services.admin.title')}</h3>
            <ul>
              {t('services.admin.items', { returnObjects: true }).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>{t('whyChoose.title')}</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <h4>🎯 {t('whyChoose.genderResponsive')}</h4>
            <p>{t('whyChoose.genderResponsiveDesc')}</p>
          </div>
          <div className="benefit">
            <h4>🔐 {t('whyChoose.secure')}</h4>
            <p>{t('whyChoose.secureDesc')}</p>
          </div>
          <div className="benefit">
            <h4>24/7 {t('whyChoose.available')}</h4>
            <p>{t('whyChoose.availableDesc')}</p>
          </div>
          <div className="benefit">
            <h4>👨‍⚖️ {t('whyChoose.expert')}</h4>
            <p>{t('whyChoose.expertDesc')}</p>
          </div>
          <div className="benefit">
            <h4>📞 {t('whyChoose.channels')}</h4>
            <p>{t('whyChoose.channelsDesc')}</p>
          </div>
          <div className="benefit">
            <h4>🌍 {t('whyChoose.inclusive')}</h4>
            <p>{t('whyChoose.inclusiveDesc')}</p>
          </div>
        </div>
      </section>

      {/* Help Resources Section */}
      <section className="help-resources">
        <h2>{t('emergency.title')}</h2>
        <div className="emergency-info">
          <p className="emergency-notice">{t('emergency.notice')}</p>
          
          <div className="resources-grid">
            <div className="resource">
              <h4>{t('emergency.hotline')}</h4>
              <p className="phone">{t('emergency.hotlineNumber')}</p>
              <p>{t('emergency.available247')}</p>
            </div>
            <div className="resource">
              <h4>{t('emergency.text')}</h4>
              <p className="phone">{t('emergency.textNumber')}</p>
              <p>{t('emergency.available247')}</p>
            </div>
            <div className="resource">
              <h4>{t('emergency.chat')}</h4>
              <p>{t('emergency.chatDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>{t('home.getHelp')}</h2>
        <p>{t('home.description')}</p>
        <Link to="/login" className="btn btn-large">{t('navbar.login')}</Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About</h4>
            <p>Support App is dedicated to combating domestic violence through education, resources, and professional support.</p>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#safety">Safety Tips</a></li>
              <li><a href="#resources">Resources</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#disclaimer">Disclaimer</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Emergency</h4>
            <p>National DV Hotline: <strong>1-800-799-7233</strong></p>
            <p>Available 24/7 • Free & Confidential</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Support App. All rights reserved. | Gender-Responsive Domestic Violence Support Platform</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
