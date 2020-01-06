import axios from 'axios';


let Connection = axios.create({
    baseURL: 'http://127.0.0.1:8888',
    timeout: 5000,
    // headers:{}
});

Connection.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});

Connection.interceptors.response.use(response => {
    if (response.status === 200) {
        return response.data;
    } else {
        this.$notify({
            type: 'warning',
            message: response.text
        })
    }
}, error => {
    this.$notify({
        type: 'warning',
        message: error
    })
});

export default Connection;