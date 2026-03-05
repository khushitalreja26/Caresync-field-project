import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

interface LoginProps {
  setIsLoggedIn: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoggedIn(true);
    navigate('/dashboard');
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
          <h1 className="login-title">Institute Login</h1>
          <p className="login-subtitle">Sign in to your care management account</p>

          {/* Error Message */}
          {error && <div className="login-error">{error}</div>}

          {/* Form */}
          <form onSubmit={handleSubmit} className="login-form">
            <div className="login-form-group">
              <label className="login-label">Email Address</label>
              <input
                type="email"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@institution.com"
              />
            </div>

            <div className="login-form-group">
              <label className="login-label">Password</label>
              <input
                type="password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>

            <div className="login-remember">
              <label className="login-checkbox-label">
                <input type="checkbox" className="login-checkbox" />
                Remember me
              </label>
              <a href="#forgot" className="login-forgot-link">Forgot Password?</a>
            </div>

            <button type="submit" className="login-button">
              Sign In →
            </button>
          </form>

          {/* Footer */}
          <div className="login-footer">
            <p>
              Don't have an account?{' '}
              <Link to="/signup" className="login-signup-link">Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;