import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTask, toggleComplete, toggleRepeat } from '../redux/todo/todoAction'
import './styles/style.css'

function Task({no,name,complete,repeat}) {

    const dispatch = useDispatch()

    return (
        <Card className="m-2">
            <Card.Header>
                <select className="toggleRepeat" onChange={()=>{repeat&&complete?dispatch(deleteTask(no)):dispatch(toggleRepeat(no))}}>
                    <option>Non-repeat</option>
                    <option>Repeat</option>
                </select>
            </Card.Header>
            <Card.Body className="d-flex justify-content-between">
                <span className={complete?"task-complete":"task-incomplete"}>{name}</span>
                {complete && <span className="task-tick">&#10003;</span>}
            </Card.Body>
            <Card.Footer>
                <Button variant={complete?"warning":"primary"} className="mr-sm-2"
                 onClick={()=>{
                     repeat?dispatch(toggleComplete(no)):dispatch(deleteTask(no))
                }}>{complete?"Completed":"Complete"}</Button>
                <Button variant="danger" onClick={()=>dispatch(deleteTask(no))}>Delete Task</Button>
            </Card.Footer>
        </Card>
    )
}

export default Task
