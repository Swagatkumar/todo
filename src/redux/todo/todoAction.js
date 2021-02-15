export const addTask = ([task,count]) => {
    return {
        type: "addTask",
        payload: [task,count]
    }
}

export const toggleComplete = (taskNo) => {
    return {
        type: "toggleComplete",
        payload: taskNo
    }
}

export const deleteTask = (taskNo) => {
    return {
        type: "deleteTask",
        payload: taskNo
    }
}