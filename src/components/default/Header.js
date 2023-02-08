import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='px-3 md:px-5 lg:px-32 xl:px-40 h-20 w-full'>
            <nav className='container mx-auto h-full font-medium tracking-wider flex justify-between items-center'>
                <Link to="/" className='font-bold'>
                    Blog <span className='text-red-400'>Food</span>
                </Link>
                {/* <ul className='flex gap-2 lg:gap-7 xl:gap-10'>
                    <li className='relative px-2 group'>
                        <Link to="/">Home</Link>
                        <div className="absolute h-[2px] w-0 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all bg-black left-0 right-0 rounded-full mx-auto"></div>
                    </li>
                    <li className='relative px-2 group'>
                        <Link to="/asian">Asian</Link>
                        <div className="absolute h-[2px] w-0 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all bg-black left-0 right-0 rounded-full mx-auto"></div>
                    </li>
                    <li className='relative px-2 group'>
                        <Link to="/india">India</Link>
                        <div className="absolute h-[2px] w-0 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all bg-black left-0 right-0 rounded-full mx-auto"></div>
                    </li>
                    <li className='relative px-2 group'>
                        <Link to="/chinese">Chinese</Link>
                        <div className="absolute h-[2px] w-0 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all bg-black left-0 right-0 rounded-full mx-auto"></div>
                    </li>
                    <li className='relative px-2 group'>
                        <Link to="/blog">blog</Link>
                        <div className="absolute h-[2px] w-0 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all bg-black left-0 right-0 rounded-full mx-auto"></div>
                    </li>
                </ul> */}
                <ul className='flex gap-2 lg:gap-7 xl:gap-10'>
                    <li>
                        <Link to="/register" className='px-5 py-2 border-[2px] border-white bg-transparent'>Register</Link>
                    </li>
                    <li>
                        <Link to="/login" className='px-5 py-2 border-[2px] border-white bg-red-400'>Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;