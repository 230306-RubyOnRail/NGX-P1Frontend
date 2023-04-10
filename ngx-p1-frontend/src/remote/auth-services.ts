import axios from "axios";

export const appAuth = axios.create({
    baseURL: 'http://localhost:3000',
    headers:{
        'Content-Type': "application/json",
    }
})

// appAuth.interceptors.request.use(
//     (request) => {
//         if(request.headers){
//             request.headers['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`
//         }

//         return request;
//     }
// )