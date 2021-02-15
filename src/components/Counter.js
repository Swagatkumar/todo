import React from 'react'
import { decrement, increment } from '../redux'
import { connect } from 'react-redux'

function Counter({count,incrementCount,decrementCount}) {
    return (
        <div>
            <h2>Counter Value - {count}</h2>
            <button onClick={incrementCount}>Increment Count</button>
            <button onClick={decrementCount}>Decrement Count</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        count: state.counter
    }
}

const mapDispatchToProps =  {
    incrementCount : () => increment(),
    decrementCount : () => decrement()
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
