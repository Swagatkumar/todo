import React, { useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { signin, signInFailure } from '../redux/user/userAction'

function Signin() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const signinDetail = useSelector(state => state.signin)
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [inputRef])

    const userNames = ["Bret", "Antonette", "Samantha", "Karianne", "Kamren", "Leopoldo_Corkery", "Elwyn.Skiles", "Maxime_Nienow", "Delphine", "Moriah.Stanton"]

    const handleSubmit = e => {
        e.preventDefault()
        const id = userNames.indexOf(userName)+1
        if(id!== 0 && password==="123"){
            dispatch(signin(id))
        }else{
            dispatch(signInFailure("Wrong user name or password!!!"))
        }
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Control ref={inputRef} type="text" value={userName} onChange={e=>setUserName(e.target.value)} placeholder="Enter Username" /><br/>
                <Form.Control type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter Password" /><br/>
                <Form.Control type="submit" className='btn btn-warning' />
            </Form>
            <div>{signinDetail.error}</div>
        </div>
    )
}

export default Signin
