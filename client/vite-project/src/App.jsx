import React from 'react';
import './index.css'; // Same CSS file
import Header from '../components/Header';
import MainBody from '../components/Mainbody';
import Sidebar from '../components/Sidebar';

function App() {
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

export default App;