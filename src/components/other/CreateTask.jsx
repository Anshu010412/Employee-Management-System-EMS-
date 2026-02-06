import React, { useState } from 'react';

const Createtask = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        // Create new task object
        const newTask = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        };

        // Get Employees from localStorage
        const data = JSON.parse(localStorage.getItem('Employees')) || [];

        // Loop through Employees to find the one assigned to the task
        const updatedData = data.map((elem) => {
            if (assignTo === elem.firstName) {
                // Add new task to the employee's tasks array
                const updatedTasks = [...elem.tasks, newTask];

                // Ensure taskCount is initialized, then increment the newTask count
                const updatedTaskCount = {
                    ...elem.taskCount,
                    newTask: (elem.taskCount?.newTask || 0) + 1,
                };

                return { ...elem, tasks: updatedTasks, taskCount: updatedTaskCount };
            }
            return elem;
        });

        // Save updated data back to localStorage
        localStorage.setItem('Employees', JSON.stringify(updatedData));

        // Clear the form fields
        setTaskTitle('');
        setCategory('');
        setAssignTo('');
        setTaskDate('');
        setTaskDescription('');
    };

    return (
        <div>
            <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
                <form onSubmit={submitHandler} className='flex items-start justify-between w-full flex-wrap px-10 py-12'>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4 border-gray-400'
                                type="text"
                                placeholder='Make a UI design'
                            />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input
                                value={taskDate}
                                onChange={(e) => setTaskDate(e.target.value)}
                                className='text-sm py-1 px-2 rounded outline-none bg-transparent border-[1px] mb-4 border-gray-400 w-4/5'
                                type="date"
                            />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                            <input
                                value={assignTo}
                                onChange={(e) => setAssignTo(e.target.value)}
                                className='text-sm py-1 px-2 rounded outline-none bg-transparent border-[1px] mb-4 border-gray-400 w-4/5'
                                type="text"
                                placeholder='Employee Name'
                            />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className='text-sm py-1 px-2 rounded outline-none bg-transparent border-[1px] mb-4 border-gray-400 w-4/5'
                                type="text"
                                placeholder='Design, Dev, Etc'
                            />
                        </div>
                    </div>

                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            className='w-full h-44 text-sm py-2 px-4 outline-none rounded bg-transparent border-[1px] border-gray-400'
                        />
                        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 active:scale-[0.8] w-full'>
                            Create Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Createtask;
