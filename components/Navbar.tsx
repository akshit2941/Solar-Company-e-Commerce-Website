import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <header className="flex justify-between items-center py-4 px-8 bg-transparent absolute top-0 left-0 w-full z-20">
            <div className="flex items-center">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={150}
                    height={40}
                    className='ml-12'
                />
            </div>
            <nav className=''>
                <ul className="hidden md:flex space-x-6 text-white">
                    <li className='navbar-ul-class'>
                        <Link href='/home'>
                            Home
                        </Link>
                    </li>
                    <li className='navbar-ul-class'>
                        <Link href='/about'>
                            About us
                        </Link>
                    </li>
                    <li className='navbar-ul-class'>
                        <Link href='/projects'>
                            Projects
                        </Link>
                    </li>
                    <li className='navbar-ul-class'>Solutions</li>
                    <li className='navbar-ul-class'>
                        <Link href='/services'>
                            Services
                        </Link>
                    </li>
                    <li className='navbar-ul-class'>Products</li>
                </ul>
            </nav>
            <button className="hidden md:flex navbar-btn text-white mr-12 border-white">
                <Link href='/contact'>
                    Contact Us
                </Link>
            </button>
        </header>
    );
};

export default Navbar;
