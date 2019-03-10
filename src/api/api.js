import request from 'ajax.js'

const api= {
    GetData(data) {
        return request('user/login',data)
    }
}

export default api