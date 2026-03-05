import React, { useState } from 'react';

interface Child {
  id: number;
  name: string;
  age: number;
  gender: string;
  enrollDate: string;
  status: 'active' | 'inactive';
}

const ChildDirectory: React.FC = () => {
  const [children, setChildren] = useState<Child[]>([
    {
      id: 1,
      name: 'Aryan Singh',
      age: 12,
      gender: 'Male',
      enrollDate: '2023-05-15',
      status: 'active'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      age: 10,
      gender: 'Female',
      enrollDate: '2023-06-10',
      status: 'active'
    },
    {
      id: 3,
      name: 'Raj Kumar',
      age: 14,
      gender: 'Male',
      enrollDate: '2023-07-01',
      status: 'active'
    },
    {
      id: 4,
      name: 'Anjali Patel',
      age: 11,
      gender: 'Female',
      enrollDate: '2023-08-20',
      status: 'active'
    }
  ]);

  const stats = {
    total: children.length,
    active: children.filter(c => c.status === 'active').length,
    female: children.filter(c => c.gender === 'Female').length
  };

  return (
    <div className="page-container">
      <div className="directory-header">
        <h1>Child Directory</h1>
        <div className="header-actions">
          <input
            type="text"
            placeholder="Search in Directory"
            className="search-input"
          />
          <button className="add-button">+ Add Residents</button>
        </div>
      </div>

      <div className="stats-cards">
        <div className="stat-card">
          <div className="stat-icon">👶</div>
          <div className="stat-info">
            <div className="stat-value">{stats.total}</div>
            <div className="stat-label">Children</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✓</div>
          <div className="stat-info">
            <div className="stat-value">{stats.active}</div>
            <div className="stat-label">Active Residents</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">♀️</div>
          <div className="stat-info">
            <div className="stat-value">{stats.female}</div>
            <div className="stat-label">Female Residents</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-info">
            <div className="stat-value">{stats.total}</div>
            <div className="stat-label">Total</div>
          </div>
        </div>
      </div>

      <div className="filter-section">
        <button className="filter-tag active">ALL (15)</button>
        <button className="filter-tag">MALE (0)</button>
        <button className="filter-tag">FEMALE (1)</button>
        <select className="sort-dropdown">
          <option>SORT A-Z</option>
          <option>Sort Z-A</option>
          <option>Newest First</option>
        </select>
        <button className="export-button">📊 Export</button>
      </div>

      <div className="table-container">
        <table className="directory-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Enrol Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {children.map((child) => (
              <tr key={child.id}>
                <td>{child.name}</td>
                <td>{child.age}</td>
                <td>{child.gender}</td>
                <td>{child.enrollDate}</td>
                <td>
                  <span className={`status-badge ${child.status}`}>
                    {child.status}
                  </span>
                </td>
                <td>
                  <button className="action-icon">✏️</button>
                  <button className="action-icon">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChildDirectory;