import Image from 'next/image';

export const Navbar = () => {
    return (
        <header className="flex justify-between items-center py-4 px-8 bg-transparent absolute top-0 left-0 w-full z-10">
            <div className="flex items-center">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={150}
                    height={40}
                    className='ml-12'
                />
            </div>
            <nav>
                <ul className="flex space-x-6 text-white">
                    <li className='navbar-ul-class'>About us</li>
                    <li className='navbar-ul-class'>Projects</li>
                    <li className='navbar-ul-class'>Solutions</li>
                    <li className='navbar-ul-class'>Services</li>
                    <li className='navbar-ul-class'>Products</li>
                </ul>
            </nav>
            <button className="navbar-btn text-black mr-12 border-black">Contact Us</button>
        </header>
    );
};

export default Navbar;
