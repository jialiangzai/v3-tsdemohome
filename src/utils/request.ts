import axios from 'axios'

const request = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0'
})

request.interceptors.request.use((config) => {
  return config
})

request.interceptors.response.use((res) => {
  return res.data?.data
})

export default request