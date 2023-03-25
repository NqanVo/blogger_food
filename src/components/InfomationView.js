import moment from "moment";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { DeletePostAPI } from "../reqApi/Posts";
import Button from "./default/Button";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiTimeFive } from "react-icons/bi";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const InfomationView = (props) => {
  const { user } = props;
  const [yourPosts, setYourPosts] = useState([]);
  const dispath = useDispatch();
  const navigate = useNavigate();

  //get posts
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(
        process.env.REACT_APP_URL_API + `posts?authorID=${user.id}`
      );
      setYourPosts(res.data.data.posts);
    };
    if (user.id) getPosts();
  }, []);

  //delete single post
  const handleDeletePost = async (post_id) => {
    const res = await DeletePostAPI(user.id, post_id, navigate, dispath);
    if (res) setYourPosts(res.posts);
  };

  return (
    <div>
      <h1>Nick name: {user.user_name}</h1>
      <h1>Email: {user.user_email}</h1>
      <h1>From: {user.user_country}</h1>
      <h1>
        Join date: <Moment date={user.createdAt} format="YYYY/MM/DD"></Moment>{" "}
        {`<=>`} {moment(user.createdAt).startOf("hour").fromNow()}
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        <h1 className="md:col-span-2">Your posts</h1>
        {yourPosts &&
          yourPosts.map((post) => (
            <div
              key={post.post_id}
              className="col-span-1 bg-slate-200 flex gap-2"
            >
              <img
                src={process.env.REACT_APP_URL_API_IMAGE + post.post_thumb}
                alt=""
                className="w-2/5 h-28 object-cover"
              />
              <div className="w-3/5 flex flex-col justify-around">
                <p className="font-medium">{post.post_title}</p>
                <p className="flex gap-1 items-center">
                  <BiTimeFive />{" "}
                  {moment(post.createdAtPost).startOf("hour").fromNow()}
                </p>
                <div className="justify-end flex">
                  <Button
                    name={<FiEdit />}
                    handleOnClick={() =>
                      navigate(`/update-post/${post.post_id}`)
                    }
                    size="s"
                    type={"icon"}
                  />
                  <Button
                    name={<RiDeleteBin5Line />}
                    handleOnClick={() => handleDeletePost(post.post_id)}
                    size="s"
                    type={"icon"}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default InfomationView;
