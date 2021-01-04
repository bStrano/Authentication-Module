import axios from 'axios'

const axiosStralom = axios.create({
    baseURL: 'https://localhost:3005/stralom'
});

export {axiosStralom};
