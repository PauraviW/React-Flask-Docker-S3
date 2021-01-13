import axios from "axios";
import {toast} from 'react-toastify'
axios.interceptors.response.use(null, error => {
    const expectedResponse = error.response && error.response.status >= 400 && error.response.status <= 500
    if (expectedResponse) {
        toast.error("Invalid Input")


        return Promise.reject(error)

    }

    toast.error("Network Error")
    return Promise.reject(error)


})
export default {get: axios.get, put: axios.put, post: axios.post, delete: axios.delete}
