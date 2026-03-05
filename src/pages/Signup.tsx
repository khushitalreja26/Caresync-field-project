import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    institutionName: '',
    email: '',
    contactPerson: '',
    phone: '',
    location: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    navigate('/login');
  };

  return (
    <div className="login-page-container">
      <div className="login-form-wrapper">
        <div className="login-card">
          {/* Logo */}
          <div className="login-logo-section">
            <span className="login-logo-icon">📱</span>
            <span className="login-logo-text">CareSync</span>
          </div>

          {/* Title */}
          <h1 className="login-title">Register Institution</h1>
          <p className="login-subtitle">Create your care management account</p>

          {/* Error Message */}
          {error && <div className="login-error">{error}</div>}

          {/* Form */}
          <form onSubmit={handleSubmit} className="login-form">
            <div className="login-form-group">
              <label className="login-label">Institution Name</label>
              <input
                type="text"
                className="login-input"
                name="institutionName"
                value={formData.institutionName}
                onChange={handleChange}
                placeholder="Your Institution Name"
              />
            </div>

            <div className="login-form-group">
              <label className="login-label">Email Address</label>
              <input
                type="email"
                className="login-input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="institution@email.com"
              />
            </div>

            <div className="login-form-group">
              <label className="login-label">Contact Person Name</label>
              <input
                type="text"
                className="login-input"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                placeholder="Full Name"
              />
            </div>

            <div className="login-form-group">
              <label className="login-label">Contact Number</label>
              <input
                type="tel"
                className="login-input"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXXXXXXX"
              />
            </div>

            <div className="login-form-group">
              <label className="login-label">Location</label>
              <input
                type="text"
                className="login-input"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City, State"
              />
            </div>

            <div className="login-form-group">
              <label className="login-label">Password</label>
              <input
                type="password"
                className="login-input"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
              />
            </div>

            <div className="login-form-group">
              <label className="login-label">Confirm Password</label>
              <input
                type="password"
                className="login-input"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
              />
            </div>

            <button type="submit" className="login-button">
              Register →
            </button>
          </form>

          {/* Footer */}
          <div className="login-footer">
            <p>
              Already have an account?{' '}
              <Link to="/login" className="login-signup-link">Sign in here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;