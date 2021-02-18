import axios from 'axios'
import {all, put, takeLatest} from 'redux-saga/effects'
import { signInFailure, signInSuccess } from './user/userAction'

function* watchForSignIn(){
    yield takeLatest("signin", handleSignin)
}

function* handleSignin(action){

    try{
        const response = yield axios.get(`https://jsonplaceholder.typicode.com/users/${action.payload}`)
        yield put(signInSuccess(response.data))
    }catch(error){
        yield put(signInFailure(error.message))
    }

}

export default function* rootSaga(){
    yield all([
        watchForSignIn()
    ])
}