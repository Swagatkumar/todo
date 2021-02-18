import { combineReducers } from "@reduxjs/toolkit";
import countReducer from "./counter/counterReducer";
import todoReducer from "./todo/todoReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    counter: countReducer,
    todo: todoReducer,
    signin: userReducer
})

export default rootReducer