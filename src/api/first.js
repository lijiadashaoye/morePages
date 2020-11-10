import axios from './apiSet/axios'

export default {
    fn(data) {
        return axios({
            method: 'get',
            url: '/singlePoetry',
            data: data
        })
    }
}