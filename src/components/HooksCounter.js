import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux'

function HooksCounter() {

    const count = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Hooks Counter Value - {count}</h2>
            <button onClick={() =>  dispatch(increment())}>Increment Count</button>
            <button onClick={() => dispatch(decrement())}>Decrement Count</button>
        </div>
    )
}

export default HooksCounter
