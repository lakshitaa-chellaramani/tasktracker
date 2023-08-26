import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && date && time) {
      onAddTask({ text: task, date, time });
      setTask('');
      setDate('');
      setTime('');
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex flex-col md:flex-row items-center">
        <input
          type="select"
          placeholder="Task"
          className="px-4 py-4 border rounded-xl w-full md:w-64 mb-2 md:mb-0 md:mr-2"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        
        <input
  type="date"
  className="px-4 py-4 border rounded-xl w-full md:w-auto mb-2 md:mb-0 md:mr-2"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  placeholder="dd-mm-yyyy"
/>

        <input
          type="time"
          className="px-4 py-4 border rounded-xl w-full md:w-auto"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button
          type="submit"
          className="mt-2  md:mt-0 bg-blue-500 lg:ml-2 hover:bg-blue-600 text-white px-4 py-4 text-md font-semibold rounded-xl w-full md:w-auto"
        >
          Add Task
        </button>
      </div>
    </form>
    </>
  );
};

export default TaskForm;
