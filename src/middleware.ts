import { KEY_ACCESS_TOKEN, KEY_REFRESH_TOKEN } from '@constants'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export default async function middleware(req: NextRequest) {
    const accessToken = req.cookies.get(KEY_ACCESS_TOKEN)?.value

    const refreshToken = req.cookies.get(KEY_REFRESH_TOKEN)?.value

    if (!accessToken || !refreshToken) {
        return NextResponse.redirect(new URL('/sign_in', req.url))
    }
}

export const config = {
    matcher: ['/', '/profile'],
}
