import axios from 'axios';

const api = axios.create({
    baseURL: 'https://react-investing-backend.herokuapp.com/',
})

export default api;