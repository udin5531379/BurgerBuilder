import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-builder-c9d35-default-rtdb.firebaseio.com/'
})

export default instance;