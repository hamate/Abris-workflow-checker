import React, { useEffect, useState } from 'react';

function Task(props) {
  const { task } = props;
  const [isDone, setIsDone] = useState(task.status);

  useEffect(() => {
    setIsDone(isDone === 'done' ? 'done' : task.status);
  }, []);

  return (
    <div className="tasks">
      <span className="task-status">
        {task.status}
      </span>
      {task.title}
    </div>
  );
}

export default Task;
