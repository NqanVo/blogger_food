import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../components/default/Button';
import Header from '../components/default/Header';
import Wrapper from '../components/default/Wrapper';
import { LogoutApi } from '../reqApi/Auth';
import moment from 'moment';
import Moment from 'react-moment';
import axios from 'axios';

import { FiEdit } from "react-icons/fi"
import { RiDeleteBin5Line } from "react-icons/ri"
import { BiTimeFive } from "react-icons/bi"

import { DeletePostAPI } from "../reqApi/Posts"

const Information = () => {
    const [action, setAction] = useState("Information")
    const user = useSelector((state) => state.auth.login.user_data)
    const navigate = useNavigate()
    const dispath = useDispatch()
    const [yourPosts, setYourPosts] = useState([])
    const handleLogout = async () => {
        await LogoutApi(navigate, dispath)
    }

    const getPosts = async () => {
        const res = await axios.get(process.env.REACT_APP_URL_API + `posts?authorID=${user.id}`)
        setYourPosts(res.data.data.posts)
    }
    useEffect(() => {
        if (user.id)
            getPosts()
    }, [])

    // console.log(yourPosts);
    const handleDeletePost = async (post_id) => {
        // const res = await axios.delete(process.env.REACT_APP_URL_API + `posts/delete-post/${user.id}/${post_id}`)
        const res = await DeletePostAPI(user.id, post_id)
        if (res)
            setYourPosts(res.posts)

    }

    return (
        <Wrapper>
            <Header></Header>
            {
                !user.id ? <Button name={"Login"} handleOnClick={() => navigate("/login")} size="l" type="main" />
                    :
                    <section className='w-full mx-auto px-3 md:px-5 lg:px-32 xl:px-40 grid grid-cols-4 xl:gap-4 gap-3 xl:my-4 my-3 min-h-screen'>
                        <div className="col-span-1 flex flex-col gap-3 xl:gap-4">
                            <Button name={"Information"} handleOnClick={() => setAction("Information")} size="l" type={action === "Information" ? "main" : "primary"} />
                            <Button name={"Update Information"} handleOnClick={() => setAction("Update Information")} size="l" type={action === "Update Information" ? "main" : "primary"} />
                            <Button name={"Update Avatar"} handleOnClick={() => setAction("Update Avatar")} size="l" type={action === "Update Avatar" ? "main" : "primary"} />
                            <Button name={"Update Password"} handleOnClick={() => setAction("Update Password")} size="l" type={action === "Update Password" ? "main" : "primary"} />
                            <Button name={"Logout"} handleOnClick={handleLogout} size="l" type="primary" />
                        </div>
                        <div className="col-span-3 border rounded-md shadow-sm p-4">
                            <h1>Nick name: {user.user_name}</h1>
                            <h1>Email: {user.user_email}</h1>
                            <h1>From: {user.user_country}</h1>
                            <h1>Join date: <Moment date={user.createdAt} format="YYYY/MM/DD"></Moment> {`<=>`} {moment(user.createdAt).startOf('hour').fromNow()}</h1>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                                <h1 className='md:col-span-2'>Your posts</h1>
                                {yourPosts && yourPosts.map((post) => (
                                    <div key={post.post_id} className="col-span-1 bg-slate-200 flex">
                                        <img src={process.env.REACT_APP_URL_API_IMAGE + post.post_thumb} alt="" className='w-2/5 h-28 object-cover' />
                                        <div className="w-3/5 flex flex-col justify-around">
                                            <p className='font-medium'>{post.post_title}</p>
                                            <p className='flex gap-1 items-center'><BiTimeFive /> {moment(post.createdAtPost).startOf('hour').fromNow()}</p>
                                            <div className="justify-end flex">
                                                <Button name={<FiEdit />} handleOnClick={() => ""} size="s" type={"icon"} />
                                                <Button name={<RiDeleteBin5Line />} handleOnClick={() => handleDeletePost(post.post_id)} size="s" type={"icon"} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </section>
            }

        </Wrapper>
    );
};

export default Information; 