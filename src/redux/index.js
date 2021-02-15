import { combineReducers } from 'redux'
import countReducer from './counter/counterReducer'
import todoReducer from './todo/todoSlice'

export { increment,decrement } from './counter/counterAction'

const rootReducer = combineReducers({
    counter: countReducer,
    todo: todoReducer
})

export { rootReducer }