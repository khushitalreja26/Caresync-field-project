import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-exact">
      {/* Header */}
      <header className="header-exact">
        <div className="header-inner">
          <div className="logo-brand-exact">
            <span className="logo-icon-exact">📱</span>
            <span className="logo-text-exact">CareSync</span>
          </div>
          <div className="header-actions">
            <a href="#support" className="header-link">Support & More</a>
            <Link to="/signup" className="header-btn-start">Get Started</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section-exact">
        <div className="hero-inner">
          <div className="hero-left-exact">
            <h1 className="hero-title-exact">Manage care.<br/>Stay organized.</h1>
            <p className="hero-text-exact">All your care management needs in one comprehensive platform</p>
            <Link to="/signup" className="hero-btn-exact">Get Started</Link>
          </div>

          <div className="hero-right-exact">
            <div className="dashboard-card-exact">
              <div className="dashboard-header-exact">
                <span>Support & More</span>
                <button className="dashboard-btn-exact">Get Started</button>
              </div>
              <div className="dashboard-body-exact">
                <h3 className="dashboard-title-exact">Dashboard</h3>
                <div className="stats-grid-exact">
                  <div className="stat-box-exact">
                    <div className="stat-number-exact">12</div>
                    <div className="stat-label-exact">Children</div>
                  </div>
                  <div className="stat-box-exact">
                    <div className="stat-number-exact">4</div>
                    <div className="stat-label-exact">Staff</div>
                  </div>
                  <div className="stat-box-exact">
                    <div className="stat-number-exact">3</div>
                    <div className="stat-label-exact">Activities</div>
                  </div>
                  <div className="stat-box-exact">
                    <div className="stat-number-exact">4</div>
                    <div className="stat-label-exact">Tasks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section-exact">
        <h2 className="features-title-exact">Everything in one place</h2>
        
        <div className="features-grid-exact">
          <div className="feature-card-exact">
            <span className="feature-icon-exact">👶</span>
            <h3 className="feature-name-exact">Child Directory</h3>
            <p className="feature-text-exact">Manage and track all children</p>
          </div>

          <div className="feature-card-exact">
            <span className="feature-icon-exact">⚕️</span>
            <h3 className="feature-name-exact">Health Desk</h3>
            <p className="feature-text-exact">Monitor health records</p>
          </div>

          <div className="feature-card-exact">
            <span className="feature-icon-exact">📝</span>
            <h3 className="feature-name-exact">Attendance Tracker</h3>
            <p className="feature-text-exact">Track attendance efficiently</p>
          </div>

          <div className="feature-card-exact">
            <span className="feature-icon-exact">👥</span>
            <h3 className="feature-name-exact">Staff Directory</h3>
            <p className="feature-text-exact">Organize staff information</p>
          </div>

          <div className="feature-card-exact">
            <span className="feature-icon-exact">🍽️</span>
            <h3 className="feature-name-exact">Meal Planning & Events</h3>
            <p className="feature-text-exact">Plan meals and organize events</p>
          </div>

          <div className="feature-card-exact">
            <span className="feature-icon-exact">💰</span>
            <h3 className="feature-name-exact">Expense Tracker</h3>
            <p className="feature-text-exact">Monitor expenses</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section-exact">
        <h2 className="about-title-exact">Who is CareSync for?</h2>
        
        <div className="about-grid-exact">
          <div className="about-card-exact">
            <span className="about-icon-exact">🏫</span>
            <h3 className="about-heading-exact">Child Care Institutions</h3>
            <ul className="about-list-exact">
              <li>• Manage children and staff efficiently</li>
              <li>• Track health and attendance</li>
              <li>• Monitor expenses and inventory</li>
              <li>• Organize activities and events</li>
            </ul>
            <Link to="/signup" className="about-btn-exact">Learn More</Link>
          </div>

          <div className="about-card-exact">
            <span className="about-icon-exact">🤝</span>
            <h3 className="about-heading-exact">NGOs Supporting Child & Women</h3>
            <ul className="about-list-exact">
              <li>• Comprehensive record management</li>
              <li>• Staff coordination tools</li>
              <li>• Health and wellness tracking</li>
              <li>• Financial transparency</li>
            </ul>
            <Link to="/signup" className="about-btn-exact">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-exact">
        <div className="footer-logo-exact">
          <span className="footer-icon-exact">📱</span>
          <span className="footer-name-exact">CareSync</span>
        </div>
        <p className="footer-text-exact">Designed specifically for care</p>
      </footer>
    </div>
  );
};

export default LandingPage;