import {SET_USER,LOADING_USER } from '../type';
//import{ SET_ERRORS, CLEAR_ERRORS, LOADING_UI} from '../type';
//import{SET_AUTHENTICATED} from '../type';
import axios from 'axios'

export const getUserData = () => (dispatch) => {
    dispatch({type: LOADING_USER})
    axios.get('/http://localhost:3000/api/profile/all')
    .then(res => {
        dispatch({
            type: SET_USER,
            payload: res.data
        })
    })
    .catch(err => console.log(err)) 

}; 
export const uploadImage = (FormData) => (dispatch) => {
    dispatch({type: LOADING_USER})
    axios.post('/http://localhost:3000/api/image/upload',FormData)
    .then(() => {
        dispatch(getUserData());
    })
    .catch((err) => console.log(err))
}

export const editUserDetails = (userDetails) => (dispatch) => {
    dispatch({type: LOADING_USER});
    axios.post('/http://localhost:3000/api/profile/updateOne' , userDetails)
    .then(()=>{
        dispatch(getUserData());

    })
    .catch(err => console.log(err));
}
/* const setAuthorizationHeader = (token) => {
    const Token = `Bearer $(token)`;
    localStorage.setItem('Token',Token);
    axios.defaults.headers.common['Authorization'] = Token;
} */