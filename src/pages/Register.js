import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../components/default/Wrapper';
import axios from "axios"
const Register = () => {
    const [country, setCountry] = useState([])
    useEffect(() => {
        const get = async () => {
            const res = await axios.get("https://restcountries.com/v3.1/all")
            console.log(res.data[0].translations.cym.common)
            setCountry(res.data)
        }
        get()
    }, [])
    return (
        <Wrapper>
            <div className="relative w-full max-h-screen overflow-hidden">
                <img
                    className='inset-0'
                    src="https://fox4kc.com/wp-content/uploads/sites/16/2022/07/GettyImages-1326917407.jpg?w=2560&h=1440&crop=1" alt="" />
                <div className="absolute inset-0 bg-black/60 blur-[2px]" />
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[400px] min-h-[400px] bg-white px-5 py-5 flex flex-col justify-between">
                    <div className="w-10 h-10 rounded-full mx-auto">
                        <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
                    </div>
                    <form action="" className='w-full'>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className='font-medium'>Nick name</label>
                            <input type="text" name="" id="" className='border w-full' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className='font-medium'>Country</label>
                            <select name="" id="" className='border w-full'>
                                {
                                    country.map((item) => (
                                        <option
                                            key={item.translations.cym.common}

                                            value={item.translations.cym.common}>{item.translations.cym.common}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className='font-medium'>Email</label>
                            <input type="email" name="" id="" className='border w-full' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className='font-medium'>Password</label>
                            <input type="email" name="" id="" className='border w-full' />
                        </div>
                        <input type="submit" value="Login" className='px-5 py-2 border-[2px] border-white bg-red-400' />
                    </form>
                    <div className="flex justify-between">
                        <Link to={"/"}>Back home page</Link>
                        <Link to={"/login"}>Login</Link>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Register;