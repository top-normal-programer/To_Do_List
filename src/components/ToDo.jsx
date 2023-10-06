import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const ToDo = ({ toDo, markDone }) => {
  const handleMarkDone = (taskId) => {
    console.log(`Task ${taskId} marked as done.`);
    markDone(taskId);
  };

  return (
    <>
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task) => (
            <React.Fragment key={task.id}>
              <div className={`col taskBg ${task.status ? 'done' : ''}`}>
                <span className="taskText">{task.title}</span>
                <div className="iconsWrap">
                  <span
                    title="Completed / Not Completed"
                    onClick={() => handleMarkDone(task.id)}
                  >
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                </div>
              </div>
            </React.Fragment>
          ))}
    </>
  );
};

export default ToDo;
