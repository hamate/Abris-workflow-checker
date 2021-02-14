import React from 'react';

function Task(props) {
  const { task, status } = props;

  function handleStatusChange() {
    if (status === 'none') {
      return <div className="dot-none" />;
    }
    if (status === 'running') {
      return <div className="loader" />;
    }
    return <div className="dot-done" />;
  }

  return (
    <div className="tasks">
      <span className="task-status">
        {handleStatusChange()}
      </span>
      {task.title}
    </div>
  );
}

export default Task;
