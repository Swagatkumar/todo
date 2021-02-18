const initialState = {
    user: null,
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case "signinSuccess":
            return {
                user: action.payload,
                error: ''
            }
        case "signinFailure":
            return {
                user: null,
                error: action.payload
            }
        case "signout":
            return {
                user: null,
                error: ''
            }
        default:
            return state
    }
}

export default userReducer