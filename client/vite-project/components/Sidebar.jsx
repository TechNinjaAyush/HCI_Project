import React from 'react';

function Sidebar() {
  return (
    <nav>
      <div className="side_navbar">
        <span>Main Menu</span>
        <a href="#" className="active">Dashboard</a>
        <a href="student-info.html">Student Information</a>
        <a href="ut-record.html">UT Records</a>
        <a href="lab-tut.html">Lab/Tutorial Records</a>
      </div>
    </nav>
  );
}

export default Sidebar;