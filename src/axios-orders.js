import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-76ace-default-rtdb.firebaseio.com/'
});

export default instance;