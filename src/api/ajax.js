import axios from 'axios'

const service = axios.create({
    baseURL: process.env.API,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
})

export default function request(url, data = {}, method = 'post') {
    return new Promise((resolve, reject) => {
        const options = {
            url = 'https://api.apiopen.top/EmailSearch?number=1012002',
            method
        }
        if (method.toLocaleLowerCase() === 'get') {
            options.params = data
        } else {
            options.data = data
        }
        service(options).then(res => {
            console.log('返回数据',res)
            resolve(res.data)
        }).catch(error => {
            reject()
            console.log(error)
        })
    })
}