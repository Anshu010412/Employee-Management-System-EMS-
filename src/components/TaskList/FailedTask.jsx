import React from 'react'

const FailedTask = ({ data }) => {
    return (
        <div className='snap-start flex-shrink-0 min-w-[280px] w-[84vw] sm:w-[300px] bg-blue-400 rounded-2xl p-5 shadow-md'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-emerald-950 text-sm md:text-lg px-3 py-1 rounded text-white'>{data.category}</h3>
                <h4 className='text-sm text-slate-800 dark:text-slate-200'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-4 text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-100'>{data.taskDescription}</h2>
            <p className='text-sm mt-2 text-slate-700 dark:text-slate-300'>{data.taskTitle}</p>
            <div className='mt-5'>
                <button className='w-full bg-red-500 py-3 text-sm rounded-lg text-white active:scale-[0.99]'>Failed</button>
            </div>
        </div>
    )
}

export default FailedTask