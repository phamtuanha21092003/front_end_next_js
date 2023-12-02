import { Header } from '@components/layout'
import { KEY_ACCESS_TOKEN, KEY_REFRESH_TOKEN } from '@constants'
import { authApi } from '@utilities/apis/auth'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { setCookie } from 'cookies-next'

const NormalLayout = async ({ children }: { children: React.ReactNode }) => {
    const refreshToken = cookies().get(KEY_REFRESH_TOKEN)?.value

    try {
        const res = await authApi.verifyRefreshToken(refreshToken)

        if (!res.ok) {
            redirect('/sign_in')
        }

        const { access_token, refresh_token } = await res.json()

        console.log(access_token)
        console.log('pham ha')

        setCookie(KEY_ACCESS_TOKEN, 'pham ha')
        setCookie(KEY_REFRESH_TOKEN, refresh_token)
    } catch (err) {
        console.log(err)
        // redirect('/sign_in')
    }

    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default NormalLayout
