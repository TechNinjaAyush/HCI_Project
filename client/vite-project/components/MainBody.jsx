import React from 'react';
import SubjectCard from './SubjectCard';

function MainBody() {
  return (
    <div className="main-body">
      <h2>Unit Test Record Section</h2>
      <SubjectCard subject="HCI" faculty="Khodskar Sir" />
      <SubjectCard subject="ML" faculty="Patil Sir" />
      <SubjectCard subject="OS" faculty="Sharma Ma'am" />
      <SubjectCard subject="TOC" faculty="Desai Sir" />
    </div>
  );
}

export default MainBody;