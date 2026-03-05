import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: '🏠' },
    { name: 'Child Directory', path: '/child-directory', icon: '👶' },
    { name: 'Staff Directory', path: '/staff-directory', icon: '👥' },
    { name: 'Health Desk', path: '/health-desk', icon: '⚕️' },
    { name: 'Staff Attendance', path: '/staff-attendance', icon: '📝' },
    { name: 'Inventory & Needs', path: '/inventory', icon: '📦' },
    { name: 'Expense Tracker', path: '/expenses', icon: '💰' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">📱</span>
          <span className="logo-text">CareSync</span>
        </div>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="menu-item"
          >
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-text">{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;