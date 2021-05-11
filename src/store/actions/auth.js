import { LOGIN } from '../constants/types'
import axios from 'axios'

import Swal from 'sweetalert2'
import  { Redirect } from 'react-router-dom'

export const loginUser  = ( payload ) => (dispatch) => {
    return (
        axios.post(`http://localhost:5000/v1/users/login`, payload )
        .then(res => {
            if(res.data === "FAILED"){
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: res.data
                })
            } else {
                const { _id, email, name } = res.data
                Swal.fire({
                    position: 'center',
                    type: 'success',
                    title: 'Login Success!',
                    showConfirmButton: true,
                    timer: 1500,
                    text: `Hi, ${name}`
                })
                dispatch({
                    type: LOGIN,
                    payload: res.data
                })
                localStorage.setItem('user', JSON.stringify(res.data))
                window.location.replace(`${process.env.REACT_APP_WEB_URL}/database`);
            }
        }).catch((err) => {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: err.message
            })
        })
    )
}

export const keepLogin = (objUser) => {
    console.log("keep login",objUser)
    return {
        type: "LOGIN",
        payload: {
            id: objUser.id,
            email: objUser.email,
        }
    }
}

export const logoutUser = () => {
    console.log('logout')
    localStorage.clear();
    window.location.replace(`${process.env.REACT_APP_WEB_URL}`);
    return {
        type: 'LOGOUT',
    }
}