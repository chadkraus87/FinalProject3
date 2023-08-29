import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_TASKS } from '../../utils/queries';
import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from '../../utils/mutations';

const TaskManager = () => {
  const { loading, error, data } = useQuery(GET_TASKS);
  const [addTaskMutation] = useMutation(ADD_TASK);
  const [deleteTaskMutation] = useMutation(DELETE_TASK);
  const [toggleTaskMutation] = useMutation(TOGGLE_TASK);
  const [newTask, setNewTask] = useState('');

   if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;

const tasks = data.tasks;

  // Add a new task
  const addTask = () => {
    if (newTask.trim() === '') return;
    addTaskMutation({ variables: { text: newTask }, refetchQueries: [{ query: GET_TASKS }] });
    setNewTask('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  // Mark a task as completed
  const toggleTask = (id) => {
    toggleTaskMutation({ variables: { id }, refetchQueries: [{ query: GET_TASKS }] });
  };

  // Delete a task
  const deleteTask = (id) => {
    deleteTaskMutation({ variables: { id }, refetchQueries: [{ query: GET_TASKS }] });
  };

  return (
    <div className="bg-offWhite p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Task Manager</h2>
      <input
        type="text"
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border p-2 rounded mr-2"
      />
      <button onClick={addTask} className="bg-darkBlue text-sm text-white p-2 rounded">
        Add Task
      </button>
      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li key={index} className={`mt-2 ${task.completed ? 'line-through' : ''}`}>
            {task.text}
            <button
              onClick={() => toggleTask(index)}
              className="ml-2 bg-delivered text-white p-1 rounded text-sm"
            >
              Completed
            </button>
            <button
              onClick={() => deleteTask(index)}
              className="ml-2 bg-burntOrange text-white p-1 rounded text-sm"
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
