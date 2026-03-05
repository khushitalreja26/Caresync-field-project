import React, { useState } from 'react';

interface Staff {
  id: number;
  name: string;
  role: string;
  joinDate: string;
  email: string;
  status: 'active' | 'inactive';
}

const StaffDirectory: React.FC = () => {
  const [staff, setStaff] = useState<Staff[]>([
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Director',
      joinDate: '2020-01-15',
      email: 'sarah@caresync.com',
      status: 'active'
    },
    {
      id: 2,
      name: 'Mike Smith',
      role: 'Teacher',
      joinDate: '2021-03-20',
      email: 'mike@caresync.com',
      status: 'active'
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Nurse',
      joinDate: '2022-06-10',
      email: 'emily@caresync.com',
      status: 'active'
    },
    {
      id: 4,
      name: 'John Wilson',
      role: 'Cook',
      joinDate: '2021-11-05',
      email: 'john@caresync.com',
      status: 'active'
    }
  ]);

  const stats = {
    total: staff.length,
    onDuty: staff.filter(s => s.status === 'active').length
  };

  return (
    <div className="page-container">
      <div className="directory-header">
        <h1>Staff Directory</h1>
        <div className="header-actions">
          <input
            type="text"
            placeholder="Search Staff"
            className="search-input"
          />
          <button className="add-button">+ Add Staff</button>
        </div>
      </div>

      <div className="stats-cards">
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-info">
            <div className="stat-value">{stats.total}</div>
            <div className="stat-label">Staff Members</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✓</div>
          <div className="stat-info">
            <div className="stat-value">{stats.onDuty}</div>
            <div className="stat-label">On Duty</div>
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
        </select>
      </div>

      <div className="table-container">
        <table className="directory-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Join Date</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((member) => (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.role}</td>
                <td>{member.joinDate}</td>
                <td>{member.email}</td>
                <td>
                  <span className={`status-badge ${member.status}`}>
                    {member.status}
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

export default StaffDirectory;