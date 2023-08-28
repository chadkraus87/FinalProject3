import React, { useState } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Add a new task
  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  // Mark a task as completed
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="bg-offWhite p-4 rounded">
      <h2 className="text-xl font-bold mb-4 text-center">Task Manager</h2>
      <input
        type="text"
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="border p-2 rounded mr-2"
      />
      <button onClick={addTask} className="bg-darkBlue text-white p-2 rounded">
        Add Task
      </button>
      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li key={index} className={`mt-2 ${task.completed ? 'line-through' : ''}`}>
            {task.text}
            <button
              onClick={() => toggleTask(index)}
              className="ml-2 bg-delivered text-white p-1 rounded"
            >
              Completed
            </button>
            <button
              onClick={() => deleteTask(index)}
              className="ml-2 bg-burntOrange text-white p-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
