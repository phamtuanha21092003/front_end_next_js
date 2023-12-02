const host = process.env.NEXT_PUBLIC_HOST_BACKEND

const controller = new AbortController()
const signal = controller.signal

const post = (
    endpoint: string,
    payload = {},
    headers = {}
): Promise<Response> => {
    return fetch(`${host}${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        signal: signal,
    })
}

const get = (
    endpoint: string,
    queryPra = {},
    headers = {}
): Promise<Response> => {
    return fetch(`${host}${endpoint}?${new URLSearchParams(queryPra)}`, {
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        signal: signal,
    })
}

export { get, post }
