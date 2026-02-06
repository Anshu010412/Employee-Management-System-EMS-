import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({ data }) => {
    return (
        <div id="tasklist" className="w-full mt-6">
            <div className="overflow-x-auto py-5 -mx-4 px-4">
                <div className="flex gap-4 items-stretch snap-x snap-mandatory touch-pan-x">
                    {data.tasks.map((elem, idx) => {
                        if (elem.active) {
                            return <AcceptTask key={idx} data={elem} />
                        }
                        if (elem.newTask) {
                            return <NewTask key={idx} data={elem} />
                        }
                        if (elem.completed) {
                            return <CompleteTask key={idx} data={elem} />
                        }
                        if (elem.failed) {
                            return <FailedTask key={idx} data={elem} />
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default TaskList