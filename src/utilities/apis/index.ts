import axios from 'axios'

const host: string | undefined = process.env.NEXT_PUBLIC_HOST_BACKEND

const client = axios.create({
    baseURL: host,
    timeout: 10000,
})

client.interceptors.response.use((res) => res.data)

const get = (endpoint: string, payload = {}, headers = {}) =>
    client.get(endpoint, {
        params: payload,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
    })

const post = (endpoint: string, payload = {}, headers = {}) =>
    client.post(endpoint, payload, {
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
    })

export { post, get }
