import React, { useEffect, useState } from 'react';
import checklist from '../../data/checklist.json';
import Task from '../Task/Task';
import './Checker.css';

function Checker() {
  const [workflow, setWorkflow] = useState(checklist.tasks);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

  }, []);

  function handleCheckingStart() {
    let i = 0;
    let randomInterval = 2;
    const setDone = () => {
      localStorage.setItem('tasks', JSON.stringify(workflow));
      const alterTasks = [...workflow];
      let alterTask;
      for (let k = 0; k <= i; k++) {
        alterTask = { ...alterTasks[k], status: 'done' };
        alterTasks[k] = alterTask;
      }
      setWorkflow(alterTasks);
      i++;
      if (i === workflow.length) {
        clearInterval(interval);
      }
      randomInterval = Math.random() * (5 - 1) + 1;
    };

    const interval = setInterval(setDone, randomInterval);
  }

  // console.log(workflow);

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
          <Task key={task.title} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Checker;
