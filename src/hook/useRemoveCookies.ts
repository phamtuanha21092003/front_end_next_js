import { KEY_ACCESS_TOKEN, KEY_REFRESH_TOKEN } from '@constants'
import { deleteCookie } from 'cookies-next'

const useRemoveCookies = () => {
    deleteCookie(KEY_ACCESS_TOKEN)
    deleteCookie(KEY_REFRESH_TOKEN)
}

export default useRemoveCookies
