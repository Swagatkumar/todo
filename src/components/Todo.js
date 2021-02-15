import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux'
import { addTask } from '../redux/todo/todoAction'

function Todo() {

    const tasks = useSelector(state => state.todo)
    const count = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const [task, setTask] = useState("")

    return (
        <div>
            <input type="text" onChange={e => {setTask(e.target.value)}} value={task}/>
            <button onClick={() => {
                dispatch(increment())
                dispatch(addTask([task,count]))
            }}>Add Task</button>
            {tasks.map(task=><h3 key={task.no}>{`${task.no},${task.task},${task.complete}`}</h3>)}
        </div>
    )
}

export default Todo
