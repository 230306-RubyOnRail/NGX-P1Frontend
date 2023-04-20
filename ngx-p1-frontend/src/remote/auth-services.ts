import axios from 'axios';

export const appAuth = axios.create({
    baseURL: 'http://ec2-34-224-41-156.compute-1.amazonaws.com:3000',
    headers:{
        'Content-Type': "application/json",
    }
})

appAuth.interceptors.request.use(
    (request) => {
        if(request.headers){
            request.headers['Authorization'] = `${sessionStorage.getItem('token')}`
        }
        return request;
    }
)