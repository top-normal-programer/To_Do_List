import React, { useState } from 'react';
import AddTaskForm from './components/AddTaskForm.jsx';
import ToDo from './components/ToDo.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask) {
      const newEntry = { id: toDo.length + 1, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask('');
    }
  };

  const markDone = (id) => {
    const updatedTasks = toDo.map((task) =>
      task.id === id ? { ...task, status: !task.status } : task
    );
    setToDo(updatedTasks);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>To-Do List</h1>
        <h6>by Piotr Siwik</h6>
      </div>
      <div className="content">
        <AddTaskForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
        {toDo.length ? <ToDo toDo={toDo} markDone={markDone} /> : <p>No tasks...</p>}
      </div>
    </div>
  );
}

export default App;
