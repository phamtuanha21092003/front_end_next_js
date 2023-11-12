import { post } from '..'

const signIn = ({
    email,
    password,
}: {
    email: string
    password: string
}): Promise<any> => {
    const endpoint = '/auth/sign_in'

    return post(endpoint, { email: email, password: password })
}

export const authApi = { signIn: signIn }
