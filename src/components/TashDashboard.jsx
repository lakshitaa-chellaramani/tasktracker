import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
const TashDashboard = () => {
    const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };
  return (
    <div>
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl text-gray-500 font-semibold mb-8">Task Tracker</h1>
      <TaskForm onAddTask={addTask} />
      <div className="w-full md:w-2/3 lg:w-1/2">
        <TaskList tasks={tasks} onDelete={deleteTask} />
      </div>
    </div>
    </div>
  )
}

export default TashDashboard
