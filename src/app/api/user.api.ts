import request from '../utils/axios.service'

const apis = {
    getList: function (params: any) {
        return request.get('/api/getList',{
            params: params
        })
    },
    getFile: function (params: any) {
        return request.get('/apiLocal/getFile',{
            params: params
        })
    },
    getProject: function (params: any) {
        return request.post('/api/getProject', params)
    }
}

export default apis