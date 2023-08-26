import React from 'react';

const Task = ({ task, onDelete }) => {
  return (
    <div className='flex justify-center'>
      <div className="w-full max-w-md px-10 py-4 mt-2 bg-white rounded-xl border  dark:bg-gray-800">


        <h2 className="mt-2 text-md  font-bold text-gray-800 dark:text-white md:mt-0">Task ID : {task.id}</h2>
        <h2 className="mt-2 text-xl lg:text-2xl  font-bold text-blue-500 dark:text-white md:mt-0">{task.text}</h2>

        <p className="mt-2 text-md font-semibold text-gray-600 dark:text-gray-200">Date : {task.date}</p>
        <p className="mt-2 text-md font-semibold text-gray-600 dark:text-gray-200">Time : {task.time}</p>


        <div className="flex justify-end mt-4">
          <button  className="text-lg bg-[#f4f6f9] px-6 py-2 rounded-xl border border-red-200  font-medium text-red-400 hover:bg-gray-200 hover:text-red-500" tabindex="0" onClick={() => onDelete(task.id)} role="link">Delete</button>
        </div>
      </div>
      </div>
  );
};

export default Task;
