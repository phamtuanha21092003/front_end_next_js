'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { authApi } from '@utilities/apis/auth'
import { useRouter } from 'next/navigation'
import { setCookie } from 'cookies-next'
import { KEY_ACCESS_TOKEN, KEY_REFRESH_TOKEN, KEY_USER_ID } from '@constants'
import { useState } from 'react'

interface InputFormSignIn {
    emailSignIn: string
    passwordSignIn: string
}

export default function FormSignIn() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputFormSignIn>()

    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)

    const onSubmit: SubmitHandler<InputFormSignIn> = async ({
        emailSignIn: email,
        passwordSignIn: password,
    }) => {
        setIsLoading(true)

        try {
            const {
                access_token: accessToken,
                refresh_token: refreshToken,
                user_id: userId,
            } = await authApi.signIn({
                email: email,
                password: password,
            })

            setCookie(KEY_ACCESS_TOKEN, accessToken)
            setCookie(KEY_REFRESH_TOKEN, refreshToken)
            setCookie(KEY_USER_ID, userId)

            router.push('/')
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form
            className="flex flex-col gap-y-4 flex-1 shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.1)] p-5 bg-[#fff]"
            onSubmit={handleSubmit(onSubmit)}
        >
            <input
                type="text"
                {...register('emailSignIn', { required: true })}
                placeholder="Email address"
                className="p-2 border rounded-lg"
            />
            <input
                type="text"
                {...register('passwordSignIn', { minLength: 7 })}
                placeholder="Password"
                className="p-2 border rounded-lg"
            />
            {errors.passwordSignIn && (
                <p className="text-[red]">
                    Password is greater than 7 character
                </p>
            )}
            <input
                type="submit"
                value={'Sign In'}
                className="bg-blue-600 rounded-lg py-2 text-white font-bold text-xl disabled:opacity-5"
                disabled={isLoading}
            />
            <hr />
            <button className="text-white bg-green-400 p-2 rounded-lg max-w-xs mx-auto font-bold text-lg">
                Create new account
            </button>
        </form>
    )
}
