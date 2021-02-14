import React, { useState } from 'react';
import checklist from '../../data/checklist.json';
import Task from '../Task/Task';
import './Checker.css';

function Checker() {
  const [workflow, setWorkflow] = useState(checklist.tasks);

  function handleCheckingStart() {
    let i = 0;
    const setDone = () => {
      const alterTasks = [...workflow];
      let alterTask;
      for (let k = 0; k <= i; k++) {
        alterTask = { ...alterTasks[k], status: 'done' };
        alterTasks[k] = alterTask;
      }
      if (i === workflow.length - 1) {
        alterTask = { ...alterTasks[i], status: 'done' };
        alterTasks[i] = alterTask;
        setWorkflow(alterTasks);
      } else {
        alterTask = { ...alterTasks[i], status: 'running' };
        alterTasks[i] = alterTask;
        setWorkflow(alterTasks);
      }
      i++;
      if (i === workflow.length) {
        clearInterval(interval);
      }
    };
    const interval = setInterval(setDone, 1000);
  }

  return (
    <div className="checker-main-container">
      <h1 className="chekcer-main-header">Workflow checker</h1>
      <div className="buttons">
        <button type="button" className="btn-1" onClick={handleCheckingStart}>
          Start checking
        </button>
        <button type="button" className="btn-1" onClick={() => window.location.reload()}>
          Reset
        </button>
      </div>
      <div className="checker-container">
        {workflow.map((task) => (
          <Task key={task.title} task={task} status={task.status} />
        ))}
      </div>
    </div>
  );
}

export default Checker;
