import axios from 'axios'
import Swal from 'sweetalert2'

export const Subscribe = async (ID) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}/subscribe/`, { id: ID })
        .then(res => {
            console.log("SUCCESS SUBSCRIBE")
            Swal.fire(`Thanks`, 'Thanks, my team will connect with you !!', 'success')
        }).catch((err) => {
            console.log(err.message)
        })
}

export const Register = async (data) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}/register`, data)
        .then((res) => {
            if (res.data !== 'FAIL') {
                Swal.fire({
                    title: 'Your Account is Ready',
                    text: "Please Check Your Email",
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Login'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.replace(`${process.env.REACT_APP_WEB_URL}/login`)
                    }
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email Already Exist',
                    footer: '<a href>Why do I have this issue?</a>'
                })
            }
        }).catch((error) => {
            alert(error.message)
        })
}

export const getUser = async (ID) => {
    await axios.post(`${process.env.REACT_APP_API_URL}/getUser/`, { id: ID })
        .then(res => {
            return res.data
            // setUser(res.data)
            // setLogin(true)
        }).catch((err) => {
            console.log(err.message)
        })
}

export const getDatabase = (ID) => {
    console.log('ID', ID)
    return axios.post(`${process.env.REACT_APP_API_URL}database`, { id: ID })
}