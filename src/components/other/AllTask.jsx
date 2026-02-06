import React, { useContext } from 'react'
import { AuthContext } from "../../Context/AuthProvider";


const AllTask = () => {
    // Get the auth data from context
    const authData = useContext(AuthContext)

    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>

            <div className='bg-emerald-700 mb-3 px-4 py-2 flex justify-between rounded'>
                <h2 className='w-1/5 text-black font-black  px-4 rounded'>Employee Name </h2>
                <h3 className='w-1/5 text-black font-black  px-4 rounded'>New Tasks</h3>
                <h5 className='w-1/5 text-black font-black  px-4 rounded'>Active Tasks</h5>
                <h5 className='w-1/5 text-black font-black  px-4 rounded'>Completed Tasks</h5>
                <h5 className='w-1/5 text-black font-black  px-4 rounded'>Failed Tasks</h5>
            </div>

            <div>
                {authData && authData.Employees ? (
                    authData.Employees.map((elem, index) => (
                        <div key={index} className='bg-[#f0e7e7] mb-3 px-4 py-2 flex justify-between rounded'>
                            <h2 className='w-1/5 text-emerald-900 px-4 rounded font-serif font-black  text-xl'>{elem.firstName}</h2>
                            <h3 className='w-1/5 text-violet-500 px-4 rounded font-black text-xl'>{elem.taskCount.new}</h3>
                            <h5 className='w-1/5 text-gray-800 px-4 rounded font-black text-xl'>{elem.taskCount.active}</h5>
                            <h5 className='w-1/5 text-yellow-600 px-4 rounded font-black text-xl'>{elem.taskCount.completed}</h5>
                            <h5 className='w-1/5 text-blue-700 px-4 rounded font-black text-xl'>{elem.taskCount.failed}</h5>
                        </div>
                    ))
                ) : (
                    <p>No employees found</p>
                )}
            </div>
        </div>
    )
}

export default AllTask
