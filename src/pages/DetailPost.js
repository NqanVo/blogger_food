import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/default/Footer";
import Header from "../components/default/Header";
import Wrapper from "../components/default/Wrapper";
import he from "he";
import moment from "moment";
import { BiTime } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
const DetailPost = () => {
  const post_id = useLocation().pathname.split("/")[2];
  const [postData, setPostData] = useState();
  const [postWithCateData, setPostWithCateData] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        process.env.REACT_APP_URL_API + `posts/${post_id}`
      );
      const res2 = await axios.get(
        process.env.REACT_APP_URL_API +
          `posts?category=${res.data.data.dataCategory.category_name}&limit=6`
      );
      const postWithCate = res2.data.data.posts;
      const filterPostWithCate = postWithCate.filter(
        (item) => item.post_id !== res.data.data.post_id
      );
      setPostData(res.data.data);
      setPostWithCateData(filterPostWithCate);
    };
    try {
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [post_id]);
  return (
    <Wrapper>
      <Header></Header>
      {postData && (
        <span className="flex gap-2 mb-5 px-3 md:px-5 lg:px-32 xl:px-40 w-full">
          <Link to={"/"} className="text-red-500 underline capitalize">
            Home
          </Link>
          {">"}
          <Link
            to={`/posts?category=${postData.dataCategory.category_name}&limit=10`}
            className="text-red-500 underline capitalize"
          >
            {postData.dataCategory.category_name}
          </Link>
          {">"}
          <p>{postData.post_title}</p>
        </span>
      )}
      <section className="grid grid-cols-1 mb-5 lg:grid-cols-4 px-3 md:px-5 lg:px-32 xl:px-40 w-full gap-5 min-h-[500px] md:min-h-screen">
        {postData && (
          <div className="col-span-3 flex flex-col gap-2 pb-5 border-b  bg-gray-50 p-2">
            <div className="w-full max-h-96 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={process.env.REACT_APP_URL_API_IMAGE + postData.post_thumb}
                alt=""
              />
            </div>
            <div className="flex gap-2 items-center">
              <img
                className="w-20 h-20 object-cover rounded-full"
                src={
                  process.env.REACT_APP_URL_API_IMAGE +
                  postData.dataUser.user_avatar
                }
                alt=""
              />
              <div className="">
                <h3 className="font-medium">
                  by: {postData.dataUser.user_name}
                </h3>
                <span className="flex gap-1 items-center">
                  <BiTime />
                  {moment(postData.createdAtPost).startOf("hour").fromNow()}
                </span>
              </div>
            </div>
            <h1 className="font-medium text-3xl">{postData.post_title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: he.decode(postData.post_desc),
              }}
            ></div>
          </div>
        )}

        {/* orther post*/}
        {postWithCateData && (
          <div className="col-span-1 flex flex-col gap-2">
            <h1>Other posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4">
              {postWithCateData.map((post, index) => {
                return (
                  <div key={index} className={`w-full h-20 flex gap-2`}>
                    <img
                      src={
                        process.env.REACT_APP_URL_API_IMAGE + post.post_thumb
                      }
                      alt=""
                      className="w-20 h-20 object-cover"
                    />
                    <div className="flex flex-col justify-between">
                      <p className="text-sm font-medium">{post.post_title}</p>
                      <p className="flex items-center gap-2 text-sm">
                        <AiOutlineUser className="text-red-400" /> by:{" "}
                        {post.dataUser.user_name}
                      </p>
                      <Link
                        to={`/post/${post.post_id}`}
                        className="p-1 border-[2px] border-white bg-red-400 w-max text-white text-sm"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
      <Footer></Footer>
    </Wrapper>
  );
};

export default DetailPost;
