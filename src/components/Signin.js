import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signin, signInFailure } from '../redux/user/userAction'

function Signin() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const signinDetail = useSelector(state => state.signin)

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
            <form onSubmit={handleSubmit}>
                <input type="text" value={userName} onChange={e=>setUserName(e.target.value)} /><br/>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} /><br/>
                <input type="submit" />
            </form>
            <div>{signinDetail.error}</div>
        </div>
    )
}

export default Signin
