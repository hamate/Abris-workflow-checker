import React from 'react';
import checklist from '../data/checklist.json';
import './Checker.css';

function Checker() {
  return (
    <div className="checker-main-container">
      <h1 className="chekcer-main-header">Workflow checker</h1>
      <button type="button" className="btn-1">Start checking</button>
      <div className="checker-container">
        {checklist.tasks.map((task) => (
          <div className="task" key="task.title">
            <span>
              X &nbsp;
            </span>
            {task.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Checker;
