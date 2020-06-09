import axios from 'axios';

const backendApi = axios.create({
    baseURL: 'https://react-investing-backend.herokuapp.com/',
})

export default backendApi;