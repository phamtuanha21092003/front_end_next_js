import FormSignIn from '@components/sign_in/FormSignIn'

const SignIn = () => {
    return (
        <main className="flex max-w-[850px] justify-center gap-x-4 mx-auto mt-40">
            <div className="mt-4 max-w-[450px]">
                <p className="text-blue-700 font-bold text-6xl">Facebook</p>
                <p className="mt-3 text-xl font-normal line-clamp-2">
                    Facebook helps you contact and shear with the people in your
                    life
                </p>
            </div>
            <FormSignIn />
        </main>
    )
}

export default SignIn
