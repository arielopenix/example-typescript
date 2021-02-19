import { HttpRequest } from "../../passapp-sdk/utils/HttpRequest";
import { User, usersTypes } from "./types/userTypes";
//import axios from 'axios'

const httpReq = new HttpRequest();

export const fetchUsersRequest = () => {
    return {
        type: usersTypes.FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users: User[]) => {
    return {
        type: usersTypes.FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error: Error) => {
    return {
        type: usersTypes.FETCH_USERS_FAILURE,
        payload: error
    }
}
/**example with axios
export const fetchUsers = () => {
    return (dispatch: any) => {
        dispatch(fetchUsersRequest);
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            console.log(users)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error =>{
            const errorMessage = error.message
            dispatch(fetchUsersFailure(errorMessage))
        })
    }
} 
*/
// example with services
export const fetchUsers = () => {
    return (dispatch: any) => {
        dispatch(fetchUsersRequest);
        httpReq.get('https://jsonplaceholder.typicode.com/users')
        .then((response: any ) => {response.json()})
        .then((data) => {
            console.log(data)
        })
        .catch(error =>{
            const errorMessage = error.message
            dispatch(fetchUsersFailure(errorMessage))
        })
    }
}