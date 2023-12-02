import { KEY_ACCESS_TOKEN } from '@constants'
import axios from 'axios'
import { getCookie } from 'cookies-next'
import { Cookie } from 'next/font/google'

const host: string | undefined = process.env.NEXT_PUBLIC_HOST_BACKEND

const client = axios.create({
    baseURL: host,
    timeout: 10000,
})

client.interceptors.request.use(function (config) {
    const token = getCookie(KEY_ACCESS_TOKEN)
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    } else {
        config.headers.Authorization = ''
    }
    return config
})

client.interceptors.response.use((res) => res.data)

const get = (endpoint: string, payload = {}, headers = {}) =>
    client.get(endpoint, {
        params: payload,
        headers: {
            ...headers,
        },
    })

const post = (endpoint: string, payload = {}, headers = {}) =>
    client.post(endpoint, payload, {
        headers: {
            ...headers,
        },
    })

export { post, get }
