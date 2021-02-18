import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Navbar, NavbarBrand, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux'
import { addTask } from '../redux/todo/todoAction'
import { signout } from '../redux/user/userAction'
import Task from './Task'

function Todo() {

    const tasks = useSelector(state => state.todo)
    const count = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const [task, setTask] = useState("")
    const [completed, setCompleted] = useState([])

    useEffect(() => {
        setCompleted(tasks.filter(task=>task.complete))
    }, [tasks])

    return (
        <>
            <Navbar bg="light" className="justify-content-between" expand="lg" >
                <NavbarBrand className="text-dark">
                    Todo-App
                </NavbarBrand>
                <Form inline onSubmit={e=>e.preventDefault()}>
                    <Form.Control className="mr-sm-2" type="text" onChange={e => {setTask(e.target.value)}} value={task} placeholder="Enter task name" />
                    <Button type="submit" variant="success" onClick={() => {
                        dispatch(increment())
                        dispatch(addTask([task,count]))
                        setTask("")
                    }}>Add Task</Button>
                </Form>
                <div>
                <Navbar.Text className="text-info border border-info rounded px-4 mr-sm-2">Total: {tasks.length}</Navbar.Text>
                <Navbar.Text className="text-success border border-success rounded px-4">Completed: {completed.length}</Navbar.Text>
                </div>
                <Button variant="danger" onClick={()=>{dispatch(signout())}}>Logout</Button>
            </Navbar>
            <Container fluid>
                <Row>
                    {tasks.map(task=><Task key={task.no} no={task.no} name={task.task} complete={task.complete} />)}
                </Row>
            </Container>
        </>
    )
}

export default Todo
