import axios from 'axios';

const axiosStralom = axios.create({
  baseURL: 'http://192.168.0.197:30045/stralom',
});

export {axiosStralom};
