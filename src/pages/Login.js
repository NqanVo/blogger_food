import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../components/default/Wrapper';
import { useForm } from "react-hook-form"
import Input from '../components/Input';
import FormSubmit from '../components/FormSubmit';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onLogin = (data) => {
        console.log(data)
    }
    return (
        <Wrapper>
            <div className="relative w-full max-h-screen overflow-hidden">
                <img
                    className='inset-0'
                    src="https://fox4kc.com/wp-content/uploads/sites/16/2022/07/GettyImages-1326917407.jpg?w=2560&h=1440&crop=1" alt="" />
                <div className="absolute inset-0 bg-black/60 blur-[2px]" />
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[400px] h-[400px] bg-white px-5 py-5 flex flex-col justify-between">
                    <form onSubmit={handleSubmit(onLogin)} className='w-full'>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className='font-medium'>Email</label>
                            <input
                                type="email"
                                className='border w-full'
                                {...register("user_email", {
                                    required: true
                                })}
                            />
                            {errors.user_email && <span>Email is required</span>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className='font-medium'>Password</label>
                            <input
                                type="password"
                                className='border w-full'
                                {...register("user_password", {
                                    required: true
                                })}
                            />
                            {errors.user_email && <span>Email is required</span>}
                        </div>
                        <input type="submit" value="Login" className='px-5 py-2 border-[2px] border-white bg-red-400' />
                    </form>
                    <div className="flex justify-between">
                        <Link to={"/"}>Back home page</Link>
                        <Link to={"/register"}>Register</Link>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Login;