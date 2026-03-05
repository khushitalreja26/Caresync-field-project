import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Children', value: 12, icon: '👶' },
    { label: 'Staff Members', value: 4, icon: '👥' },
    { label: 'Ongoing Activities', value: 3, icon: '📌' },
    { label: 'Pending Tasks', value: 4, icon: '📋' }
  ];

  const recentActivities = [
    { name: 'John Doe', action: 'Added new child', time: '2 hours ago' },
    { name: 'Sarah Smith', action: 'Updated staff record', time: '4 hours ago' },
    { name: 'Mike Johnson', action: 'Logged health check', time: '1 day ago' }
  ];

  const menuItems = [
    { name: 'Child Directory', path: '/child-directory', icon: '👶' },
    { name: 'Staff Directory', path: '/staff-directory', icon: '👥' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Good morning 👋</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="summary-section">
        <h2>Summary</h2>
        <div className="summary-grid">
          <div className="summary-card">
            <h3>Children Overview</h3>
            <p className="card-value">12 Total</p>
            <p className="card-text">8 Active registrations</p>
          </div>

          <div className="summary-card">
            <h3>Staff Overview</h3>
            <p className="card-value">4 Members</p>
            <p className="card-text">3 on duty today</p>
          </div>

          <div className="summary-card">
            <h3>Health Status</h3>
            <p className="card-value">All Good</p>
            <p className="card-text">No critical alerts</p>
          </div>

          <div className="summary-card">
            <h3>Attendance</h3>
            <p className="card-value">95%</p>
            <p className="card-text">This month average</p>
          </div>
        </div>
      </div>

      <div className="summary-section">
        <h2>Quick Links</h2>
        <div className="summary-grid">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '20px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderRadius: '12px',
                transition: 'transform 0.3s'
              } as React.CSSProperties}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <span style={{ fontSize: '32px' }}>{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;