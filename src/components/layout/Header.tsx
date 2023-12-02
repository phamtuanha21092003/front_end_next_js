import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <header className="h-14 fixed top-0 left-0 right-0 shadow bg-white flex px-12 items-center">
                <Link className="flex items-center" href={'/'}>
                    <Image
                        src={'/icon-fb.svg'}
                        width={40}
                        height={40}
                        alt="err"
                    />
                </Link>
                <div></div>
                <div></div>
            </header>

            <div className="h-14"></div>
        </>
    )
}

export default Header
