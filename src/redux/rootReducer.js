import { combineReducers } from "@reduxjs/toolkit";
import countReducer from "./counter/counterReducer";
import todoReducer from "./todo/todoReducer";

const rootReducer = combineReducers({
    counter: countReducer,
    todo: todoReducer
})

export default rootReducer