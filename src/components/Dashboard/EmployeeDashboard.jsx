import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Header changeUser={props.changeUser} data={props.data} />

        <TaskListNumber data={props.data} />

        <section className="mt-8">
          <TaskList data={props.data} />
        </section>
      </div>
    </div>
  )
}

export default EmployeeDashboard