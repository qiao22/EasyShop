import axios from 'axios'

let Connection = axios.create({
    baseURL: 'http://127.0.0.1:8888',
    timeout: 5000,
})


Connection.interceptors.request.use(config => {
    config.headers['x-nideshop-token'] = window.sessionStorage.getItem('token')
    return config;
}, error => {
    return Promise.reject(error);
});

Connection.interceptors.response.use(response => {
    if (response.status === 200) {
        return response.data;
    } else {
        console.log(response)
    }
}, error => {
    console.log(error)
});

export default Connection;