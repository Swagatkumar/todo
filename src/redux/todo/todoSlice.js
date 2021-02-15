import { createSlice } from "@reduxjs/toolkit";
import store from "../store";

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state = [...state, {
                no: store.getState().counter,
                task: action.payload,
                complete: false
            }]
        },
        toggleComplete: (state, action) => {
            state = state.map(task => {
                if(task.no===action.payload){
                    return {
                        ...task,
                        complete: !task.complete
                    }
                }
                return task
            })
        },
        deleteTask: (state, action) => {
            state = state.filter(task => task.no!==action.payload)
        }
    },
})

export const {addTask,deleteTask,toggleComplete} = todoSlice.actions

export default todoSlice.reducer