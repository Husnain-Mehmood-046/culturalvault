import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GuideLogin.css';

const GuideLogin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Hardcoded credentials (replace with API call later)
  const GUIDE_CREDENTIALS = {
    username: 'guide',
    password: 'guide123'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      if (
        credentials.username === GUIDE_CREDENTIALS.username &&
        credentials.password === GUIDE_CREDENTIALS.password
      ) {
        // Store authentication token
        localStorage.setItem('guideToken', 'guide-auth-token');
        localStorage.setItem('userRole', 'guide');
        navigate('/guide/dashboard');
      } else {
        setError('Invalid username or password');
      }
      setLoading(false);
    }, 500);
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  return (
    <div className="guide-login-container">
      <div className="guide-login-card">
        {/* Header */}
        <div className="guide-login-header">
          <div className="guide-login-icon">
            <span style={{ fontSize: '40px' }}>🧭</span>
          </div>
          <h1>Guide Portal</h1>
          <p>Sign in to manage your tours and bookings</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="guide-login-form">
          {/* Error Message */}
          {error && (
            <div className="guide-error-message">
              <span>⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {/* Username Field */}
          <div className="guide-form-group">
            <label>Username</label>
            <div className="guide-input-wrapper">
              <span className="guide-input-icon">👤</span>
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="guide-form-group">
            <label>Password</label>
            <div className="guide-input-wrapper">
              <span className="guide-input-icon">🔒</span>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="guide-login-button" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          {/* Demo Credentials */}
          <div className="guide-demo-credentials">
            <p className="guide-demo-title">Demo Credentials:</p>
            <p><strong>Username:</strong> guide</p>
            <p><strong>Password:</strong> guide123</p>
          </div>
        </form>

        {/* Footer */}
        <div className="guide-login-footer">
          <p>Need help? Contact your tour coordinator</p>
        </div>
      </div>
    </div>
  );
};

export default GuideLogin;