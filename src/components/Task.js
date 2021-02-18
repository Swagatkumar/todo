import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, toggleComplete } from '../redux/todo/todoAction'

function Task({no,name,complete}) {

    const dispatch = useDispatch()
    return (
        <div>
            <h3>{name}</h3>
            <button onClick={()=>dispatch(toggleComplete(no))}>{complete?"Completed":"Complete"}</button>
            <button onClick={()=>dispatch(deleteTask(no))}>Delete Task</button>
        </div>
    )
}

export default Task
