const todoReducer = (state = [], action) => {
    switch(action.type){
        case "addTask":
            return [...state, {
                no: action.payload[1],
                task: action.payload[0],
                complete: false
            }]

        case "toggleComplete":
            return state.map(task => {
                if(task.no===action.payload){
                    return {
                        ...task,
                        complete: !task.complete
                    }
                }
                return task
            })

        case "deleteTask":
            return state.filter(task => task.no!==action.payload)

        default:
            return state
    }
}

export default todoReducer