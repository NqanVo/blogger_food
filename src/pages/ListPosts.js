import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import Footer from "../components/default/Footer";
import Header from "../components/default/Header";
import Wrapper from "../components/default/Wrapper";
import he from "he";
import { convert } from "html-to-text";
import { Link } from "react-router-dom";

const ListPosts = memo(() => {
  const [openModel, setOpenModel] = useState(false);
  const [dataModel, setDataModel] = useState({});
  const [listPosts, setListPosts] = useState([]);
  const [selectCate, setSelectCate] = useState([]);
  const [searchAuthor, setSearchAuthor] = useState("");
  const [sort, setSort] = useState("DESC");
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        process.env.REACT_APP_URL_API +
          `posts?author=${searchAuthor}&category=&pages=1&order=${sort}&limit=6`
      );
      setListPosts(res.data.data.posts);
    };
    getData();
  }, [searchAuthor, sort, selectCate]);
  const handleOpenModel = (post) => {
    setOpenModel(true);
    setDataModel(post);
  };
  //   console.log(listPosts);
  return (
    <Wrapper>
      <Header></Header>
      <section className="grid grid-cols-1 mb-5 lg:grid-cols-6 px-3 md:px-5 lg:px-32 xl:px-40 w-full gap-5 min-h-[500px] md:min-h-screen">
        <div className="col-span-1 bg-slate-300"></div>
        <div className="col-span-5 h-full bg-slate-50 flex flex-col">
          <div className="w-full h-20 bg-red-500"></div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 p-2">
            {!(listPosts.length > 0) ? (
              <AiOutlineLoading />
            ) : (
              listPosts.map((post, index) => {
                const htmlString = post.post_desc;
                const textString = convert(htmlString, {
                  wordwrap: false,
                  ignoreHref: true,
                  ignoreImage: true,
                  preserveNewlines: true,
                  selectors: [{ selector: "a", format: "skip" }],
                });
                return (
                  <div
                    key={index}
                    className="w-full h-80 flex flex-col gap-1 overflow-hidden rounded-sm bg-white shadow-md"
                  >
                    <div className="w-full h-1/2">
                      <img
                        className="w-full h-full object-cover"
                        src={
                          process.env.REACT_APP_URL_API_IMAGE + post.post_thumb
                        }
                        alt={post.post_thumb}
                      />
                    </div>
                    <div className="p-2">
                      <Link to={`/post/${post.post_id}`}>
                        <h3>{post.post_title}</h3>
                      </Link>

                      <div className="text-sm xl:text-base">
                        {textString.substring(0, 250) + "..."}
                        <b
                          className="cursor-pointer"
                          onClick={() => handleOpenModel(post)}
                        >
                          View more
                        </b>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="w-full h-20 bg-red-500"></div>
        </div>
      </section>

      {openModel && Object.keys(dataModel).length > 0 && (
        <div
          className="fixed inset-0 bg-black/30 z-10 flex justify-center items-center"
          onClick={() => setOpenModel(false)}
        >
          <div
            className={`relative p-2 bg-white w-[640px] h-[600px] max-h-[600px] overflow-y-auto duration-1000 transition-all transform ${
              openModel ? "scale-100 opacity-100" : "scale-0 opacity-0"
            } `}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="absolute top-5 right-5 text-white p-2 cursor-pointer"
              onClick={() => setOpenModel(false)}
            >
              X
            </div>
            <img
              className="w-full h-1/3 object-cover"
              src={process.env.REACT_APP_URL_API_IMAGE + dataModel.post_thumb}
              alt={dataModel.post_thumb}
            />
            <h3>{dataModel.post_title}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: he.decode(dataModel.post_desc),
              }}
            ></div>
          </div>
        </div>
      )}
      <Footer></Footer>
    </Wrapper>
  );
});

export default ListPosts;
