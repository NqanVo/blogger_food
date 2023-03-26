import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import Footer from "../components/default/Footer";
import Header from "../components/default/Header";
import Wrapper from "../components/default/Wrapper";
import he from "he";
import { convert } from "html-to-text";
import { Link, useNavigate } from "react-router-dom";
import FormC from "../components/FormController/FormC"
import InputC from "../components/FormController/InputC"
import { useForm } from "react-hook-form";
import Button from "../components/default/Button";
import Pagination from "../components/Pagination";
const ListPosts = memo(() => {
  const { register, watch, handleSubmit, formState: { errors } } = useForm()
  const [categories, setCategories] = useState([]);
  const history = useNavigate();
  const [openModel, setOpenModel] = useState(false);
  const [dataModel, setDataModel] = useState({});
  const [listPosts, setListPosts] = useState([]);
  const [sort, setSort] = useState("DESC");
  const params = new URLSearchParams(window.location.search);
  const getAuthor = params.get('author')
  const getCategory = params.get('category') ? params.get('category').split(",") : []
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);
  // console.log("pages" + pages);
  // console.log("currentPage" + currentPage);
  // console.log(listPosts);
  // get categories
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        process.env.REACT_APP_URL_API + `category`
      );
      setCategories(res.data.data);
    };
    getData();
  }, [])
  // get posts
  useEffect(() => {
    let categories = watch("categories")
    if (!categories)
      categories = getCategory
    const params = new URLSearchParams();
    params.append("author", watch("searchAuthor"));
    params.append("category", categories);
    params.append("order", sort);
    history(`/posts?${params.toString()}`)
    const getData = async () => {
      const res = await axios.get(
        process.env.REACT_APP_URL_API +
        `posts?author=${watch("searchAuthor")}&category=${categories}&pages=${currentPage}&order=${sort}&limit=6`
      );
      setListPosts(res.data.data.posts);
      setPages(res.data.data.pages);
    };
    getData();
  }, [watch("searchAuthor"), sort, watch("categories"), currentPage]);

  //open model
  const handleOpenModel = (post) => {
    setOpenModel(true);
    setDataModel(post);
  };
  const handleViewPage = (page) => {
    setCurrentPage(currentPage + page);
  };

  const handleSearch = () => { }
  return (
    <Wrapper>
      <Header></Header>
      <section className="grid grid-cols-1 mb-5 lg:grid-cols-8 px-3 md:px-5 lg:px-32 xl:px-40 w-full gap-5 min-h-[500px] md:min-h-screen"
        onClick={() => setOpenModel(false)}
      >
        <div className="col-span-2 ">
          <FormC
            handleSubmit={handleSubmit}
            onSubmit={handleSearch}
          >
            <InputC
              type={"text"}
              label={"Author"}
              name={"searchAuthor"}
              register={register}
            />
            <div className="flex flex-col gap-2">
              <label htmlFor={""} className="font-medium">
                {"Categories"}
              </label>
              {categories && categories.map((cate, index) => {
                return (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      id={`Categories${cate.category_name}`}
                      type={"checkbox"}
                      defaultValue={cate.category_name}
                      defaultChecked={getCategory.includes(cate.category_name)}
                      className={`border-2 outline-none px-4 py-2 `}
                      {...register("categories", {})}
                    />
                    <label htmlFor={`Categories${cate.category_name}`} className="font-medium capitalize cursor-pointer">
                      {cate.category_name}
                    </label>
                  </div>
                )
              })}
            </div>
          </FormC>
        </div>
        <div className="col-span-6 h-full bg-slate-50 flex flex-col gap-2 p-2">
          <div className="w-full flex gap-2">
            <Button
              name={"New"}
              handleOnClick={() => setSort("DESC")}
              size="s"
              type={sort === "DESC" ? "main" : "primary"}
            />
            <Button
              name={"Old"}
              handleOnClick={() => setSort("ASC")}
              size="s"
              type={sort === "ASC" ? "main" : "primary"}
            />
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            {!(listPosts) ? (
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

                      <div className="text-sm">
                        {textString.substring(0, 220) + "..."}
                        <b
                          className="cursor-pointer"
                          onClick={(e) => { e.stopPropagation(); handleOpenModel(post) }}
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
          <div className="w-full">
            <Pagination
              handleView={handleViewPage}
              cruPage={currentPage}
              maxPage={pages}

            />
          </div>
        </div>
      </section>

      {/* model  */}
      <div
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-white w-full md:w-[640px] h-[600px] max-h-[600px] shadow-xl transition-all duration-500 transform  ${openModel ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {openModel && Object.keys(dataModel).length > 0 && (<>
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
            className="h-[330px] overflow-y-auto"
            dangerouslySetInnerHTML={{
              __html: he.decode(dataModel.post_desc),
            }}
          ></div>
        </>)}
      </div>
      <Footer></Footer>
    </Wrapper>
  );
});

export default ListPosts;
