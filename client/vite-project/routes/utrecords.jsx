import React from 'react';
import '../src/index.css'; // Same CSS file
import Header from '../components/Header';
import MainBody from '../components/Mainbody';
import Sidebar from '../components/Sidebar';

function utrecords() {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <MainBody />
      </div>
    </div>
  );
}

export default utrecords;