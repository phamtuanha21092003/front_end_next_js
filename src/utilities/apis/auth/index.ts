import { post as postAxios } from '..'
import { post } from '../fetch'

const signIn = ({
    email,
    password,
}: {
    email: string
    password: string
}): Promise<any> => {
    const endpoint = '/auth/sign_in'

    return postAxios(endpoint, { email: email, password: password })
}

const verifyRefreshToken = (refreshToken: string | undefined) => {
    const endpoint = '/auth/verify_refresh_token'

    return post(endpoint, { refresh: refreshToken })
}

export const authApi = {
    signIn: signIn,
    verifyRefreshToken: verifyRefreshToken,
}
