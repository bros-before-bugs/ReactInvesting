import axios from 'axios';

const stockDioApi = axios.create({
    baseURL: 'https://api.stockdio.com/data/financial/prices/v1/',
})

export default stockDioApi;