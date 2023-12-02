'use client'

import { KEY_ACCESS_TOKEN, KEY_REFRESH_TOKEN } from '@constants'
import { setCookie } from 'cookies-next'

const useSaveCookies = (accessToken: string, refreshToken: string) => {
    setCookie(KEY_ACCESS_TOKEN, accessToken)
    setCookie(KEY_REFRESH_TOKEN, refreshToken)
}

export default useSaveCookies
