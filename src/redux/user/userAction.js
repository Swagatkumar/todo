export const signInSuccess = (user) => {
    return {
        type: "signinSuccess",
        payload: user
    }
}

export const signInFailure = (error) => {
    return {
        type: "signinFailure",
        payload: error
    }
}

export const signout = () => {
    return {
        type: "signout"
    }
}

export const signin = (userId) => {
    return {
        type: "signin",
        payload: userId
    }
}