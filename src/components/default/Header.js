import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import { LogoutApi } from "../../reqApi/Auth"
import { SlOptionsVertical } from "react-icons/sl"
import { IoAddOutline } from "react-icons/io5"

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

const Header = () => {
    const navigate = useNavigate()

    const user = useSelector((state) => state.auth.login.user_data)
    // console.log(user);
    const handleToLogin = () => {
        navigate("/login")
    }
    const handleToRegister = () => {
        navigate("/register")
    }
    const handleToInformation = () => {
        navigate("/information")
    }
    const handleToNewPost = () => {
        navigate("/create-post")
    }

    return (
        <header className='px-3 md:px-5 lg:px-32 xl:px-40 h-20 w-full'>
            <nav className='container mx-auto h-full font-medium tracking-wider flex justify-between items-center'>
                <Link to="/" className='font-black font-main'>
                    <h1>Blog <span className='text-red-400'>Food</span></h1>
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
                {!user.id ? (<ul className='flex items-center gap-2 lg:gap-3 xl:gap-4'>
                    <li>
                        <Button name={"Register"} handleOnClick={handleToRegister} size="s" type="primary" />
                    </li>
                    <li>
                        <Button name={"Login"} handleOnClick={handleToLogin} size="s" type="main" />
                    </li>
                </ul>) : (<ul className='flex items-center gap-2 lg:gap-3 xl:gap-4'>

                    <Tippy content="New posts" delay={100}>
                        <Button name={<IoAddOutline size={20} />} handleOnClick={handleToNewPost} size="s" type="icon" />
                    </Tippy>
                    <img
                        onClick={handleToInformation}
                        src={process.env.REACT_APP_URL_API_IMAGE + user.user_avatar}
                        alt={user.user_avatar}
                        className='w-12 h-12 object-cover rounded-full shadow-md cursor-pointer' />
                    <li className='cursor-pointer'>
                        <Tippy content="Settings" delay={100}>
                            <Button name={<SlOptionsVertical />} handleOnClick={handleToInformation} size="s" type="icon" />
                        </Tippy>
                    </li>
                </ul>)}

            </nav>

        </header>
    );
};

export default Header;