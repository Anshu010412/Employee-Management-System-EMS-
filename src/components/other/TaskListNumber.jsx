import React from 'react'

const StatCard = ({ value, label, bgClass }) => (
  <div className={`min-w-[120px] w-[180px] md:w-[220px] px-4 py-6 rounded-2xl flex flex-col items-center justify-center ${bgClass}`}>
    <div className="text-3xl font-bold text-white">{value}</div>
    <div className="text-sm text-white/90 mt-2 text-center">{label}</div>
  </div>
)

const TaskListNumber = ({ data }) => {
  return (
    <div className="mt-8">
      <div className="overflow-x-auto -mx-4 px-4">
        <div className="inline-flex gap-4 w-max">
          <StatCard value={data.taskCount.active} label="Accepted Task" bgClass="bg-slate-500" />
          <StatCard value={data.taskCount.completed} label="Completed Task" bgClass="bg-amber-600" />
          <StatCard value={data.taskCount.failed} label="Failed Task" bgClass="bg-sky-500" />
          <StatCard value={data.taskCount.new} label="New Task" bgClass="bg-violet-500" />
        </div>
      </div>
    </div>
  )
}

export default TaskListNumber