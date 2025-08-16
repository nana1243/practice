import axios from 'axios';

const axiosInstances = axios.create({
    baseURL : 'http://localhost:4000',
    withCredentials : true,
})

axiosInstances.interceptors.request.use((config)=>{
    const token = sessionStorage.getItem('accss_token');
    if(token){
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`
    }
},
    (error)=> Promise.reject(error)
)

export default axiosInstances;