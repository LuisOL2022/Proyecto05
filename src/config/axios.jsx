import axios from 'axios'

const backendUrlLocal = "http://localhost:4500" 
const backendUrlProd = "https://api-express-sgrn.onrender.com/" 
const axiosClient = axios.create({ 
    baseURL: backendUrlProd  
})                            

export default axiosClient