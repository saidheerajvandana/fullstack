import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import LanguageSwitcher from '../components/LanguageSwitcher';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('victim');
  const [error, setError] = useState('');
  const { t } = useTranslation();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError(t('login.fillAllFields'));
      return;
    }

    // Demo credentials validation
    const validCredentials = {
      admin: { email: 'admin@supportapp.com', password: 'admin123' },
      victim: { email: 'victim@supportapp.com', password: 'victim123' },
      counsellor: { email: 'counsellor@supportapp.com', password: 'counsellor123' },
      legal: { email: 'legal@supportapp.com', password: 'legal123' }
    };

    const credentials = validCredentials[role];
    if (email === credentials.email && password === credentials.password) {
      login(email, password, role);
      navigate(`/dashboard/${role}`);
    } else {
      setError(t('login.invalidCredentials'));
    }
  };

  return (
    <div className="login-container">
      <div className="language-switcher-login">
        <LanguageSwitcher />
      </div>
      <div className="login-box">
        <h1>{t('login.title')}</h1>
        <p className="subtitle">{t('login.subtitle')}</p>
        
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="role">{t('login.selectRole')}</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="form-control"
            >
              <option value="victim">{t('login.victim')}</option>
              <option value="counsellor">{t('login.counsellor')}</option>
              <option value="legal">{t('login.legal')}</option>
              <option value="admin">{t('login.admin')}</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="email">{t('login.email')}</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={`${t('login.email')} ${t('login.email')}`}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">{t('login.password')}</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t('login.password')}
              className="form-control"
            />
          </div>

          <button type="submit" className="btn-login">
            {t('login.loginButton')}
          </button>
        </form>

        <div className="demo-credentials">
          <h3>{t('login.demoCredentials')}</h3>
          <p><strong>{t('login.admin')}:</strong> admin@supportapp.com / admin123</p>
          <p><strong>{t('login.victim')}:</strong> victim@supportapp.com / victim123</p>
          <p><strong>{t('login.counsellor')}:</strong> counsellor@supportapp.com / counsellor123</p>
          <p><strong>{t('login.legal')}:</strong> legal@supportapp.com / legal123</p>
        </div>

        <div className="login-footer">
          <Link to="/" className="back-link">{t('login.backHome')}</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
