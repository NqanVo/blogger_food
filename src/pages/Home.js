import React, { useEffect, useState } from "react";
import Banner from "../components/default/Banner";
import Footer from "../components/default/Footer";
import Header from "../components/default/Header";
import Media from "../components/default/Media";
import Wrapper from "../components/default/Wrapper";
import axios from "axios";

import Pagination from "../components/Pagination";
import News from "../components/default/News";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/default/Button";
import { useSelector } from "react-redux";

const categorise = [
  {
    name: "Asian",
    thumb:
      "https://insanelygoodrecipes.com/wp-content/uploads/2021/01/Asian-Orange-Chicken-with-Green-Onions.png",
  },
  {
    name: "India",
    thumb:
      "https://cdn.tasteatlas.com//images/toplistarticles/d0e6a0a79d5f4197a51f4ca065393ffe.jpg?w=375&h=280",
  },
  {
    name: "Viet Nam",
    thumb:
      "https://vietnamtravel.com/images/2020/10/vietnamese-cuisine3.jpg.webp",
  },
  {
    name: "China",
    thumb:
      "https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2022/01/Untitled-design-2022-01-27T153138.911.jpg",
  },
];

const Home = () => {
  document.title = "BlogFood";
  const navigate = useNavigate();

  const [dataMostPopularDish, setDataMostPopularDish] = useState([]);
  const [dataAuthor, setDataAuthor] = useState({});
  const [pagesMostPopularDish, setPagesMostPopularDish] = useState(0);
  const [viewPageMPD, setViewPageMPD] = useState(1);

  const [dataCategory, setDataCategory] = useState([]);
  const [pagesCategory, setPagesCategory] = useState(0);
  const [viewPageCat, setViewPageCat] = useState(1);
  const [choseCat, setChoseCat] = useState("asian");

  const user_id = useSelector((state) => state.auth.login.user_data.id);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_URL_API}posts?pages=${viewPageMPD}&limit=4`
      );
      setDataMostPopularDish(res.data.data.posts);
      setDataAuthor(res.data.data.posts[0].dataUser);
      setPagesMostPopularDish(res.data.data.pages);
    };
    getData();
  }, [viewPageMPD]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_URL_API}posts?category=${choseCat}&pages=${viewPageCat}&limit=6`
      );
      setDataCategory(res.data.data.posts);
      setPagesCategory(res.data.data.pages);
    };
    getData();
  }, [viewPageCat, choseCat]);
  const handleViewPageMPD = (page) => {
    setViewPageMPD(viewPageMPD + page);
  };
  const handleViewPageCat = (page) => {
    setViewPageCat(viewPageCat + page);
  };

  const handleToLogin = () => {
    navigate("/login");
  };
  const handleToRegister = () => {
    navigate("/register");
  };
  return (
    <Wrapper>
      <Header></Header>
      <Banner></Banner>
      <section className="w-full mx-auto px-3 md:px-5 lg:px-32 xl:px-40 grid grid-cols-4 xl:gap-4 gap-3 xl:my-4 my-3 min-h-screen">
        <div className="col-span-4 lg:col-span-3 flex flex-col gap-4">
          {/* Most Popular Dish */}
          <div className="flex flex-col gap-4">
            <h1 className="pb-2 border-b-4 border-red-400">
              Most Popular Dish
            </h1>
            <div className="w-full grid grid-cols-5 gap-2">
              {dataMostPopularDish
                ? dataMostPopularDish.map((post, index) => {
                    return (
                      <Link
                        to={`/post/${post.post_id}`}
                        onMouseOver={() => setDataAuthor(post.dataUser)}
                        key={index}
                        className={`${
                          index === 0 || index === 3
                            ? "col-span-3"
                            : "col-span-2"
                        } relative w-full h-40 group hover:cursor-pointer overflow-hidden`}
                      >
                        <img
                          src={
                            process.env.REACT_APP_URL_API_IMAGE +
                            post.post_thumb
                          }
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <h3 className="absolute inset-0 text-white z-50 flex justify-center items-center transform -translate-x-full duration-300 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                          {post.post_title}
                        </h3>
                        <div className="absolute inset-0 w-full h-full m-auto bg-black/20 duration-300 group-hover:bg-black/50 blur-[2px]" />
                      </Link>
                    );
                  })
                : "loading..."}
            </div>
            <Pagination
              handleView={handleViewPageMPD}
              cruPage={viewPageMPD}
              maxPage={pagesMostPopularDish}
            ></Pagination>
          </div>
          {/* category */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-end items-center gap-2 pb-2 border-b-4 border-red-400 font-medium">
              <h1>Category:</h1>
              <Button
                size="s"
                name="Asian"
                type={choseCat === "asian" ? "main" : "primary"}
                handleOnClick={() => setChoseCat("asian")}
              ></Button>
              <Button
                size="s"
                name="India"
                type={choseCat === "india" ? "main" : "primary"}
                handleOnClick={() => setChoseCat("india")}
              ></Button>
              <Button
                size="s"
                name="Europe"
                type={choseCat === "europe" ? "main" : "primary"}
                handleOnClick={() => setChoseCat("europe")}
              ></Button>
              <Button
                size="s"
                name="China"
                type={choseCat === "china" ? "main" : "primary"}
                handleOnClick={() => setChoseCat("china")}
              ></Button>
            </div>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2">
              {dataCategory.map((item, index) => {
                return (
                  <Link
                    to={`/post/${item.post_id}`}
                    key={index}
                    className={`relative w-full h-40 overflow-hidden cursor-pointer`}
                  >
                    <img
                      src={
                        process.env.REACT_APP_URL_API_IMAGE + item.post_thumb
                      }
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-[20%] m-auto bg-black/50 blur-[2px]" />
                    <h4 className="absolute bottom-0 left-2 text-white z-50">
                      {item.post_title}
                    </h4>
                  </Link>
                );
              })}
            </div>
            <Pagination
              handleView={handleViewPageCat}
              cruPage={viewPageCat}
              maxPage={pagesCategory}
            ></Pagination>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1 flex flex-col gap-4">
          {/* author  */}
          <div className="hidden lg:flex flex-col gap-4 text-center">
            <h1 className="pb-2 border-b-4 border-red-400">Author</h1>
            <img
              src={process.env.REACT_APP_URL_API_IMAGE + dataAuthor.user_avatar}
              alt=""
              className="w-20 h-20 rounded-full mx-auto"
            />
            <h3>{dataAuthor.user_name}</h3>
            <span>Country: {dataAuthor.user_country}</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae quo consectetur voluptates laboriosam ea deserunt
              obcaecati ad illum.
            </p>
          </div>
          {/* news */}
          <News data={categorise} title={"News"}></News>
          {/* auth */}
          {!user_id ? (
            <div className="flex flex-col gap-4">
              <Button
                name={"Register"}
                handleOnClick={handleToRegister}
                size="l"
                type="main"
              />
              <Button
                name={"Login"}
                handleOnClick={handleToLogin}
                size="l"
                type="primary"
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
      <Media></Media>
      <Footer></Footer>
    </Wrapper>
  );
};

export default Home;
