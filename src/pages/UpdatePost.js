import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/default/Button";
import Header from "../components/default/Header";
import Wrapper from "../components/default/Wrapper";
import FormC from "../components/FormController/FormC";
import InputC from "../components/FormController/InputC";
import InputRadio from "../components/FormController/InputRadio";
import _ from "lodash";
import { UpdatePostAPI } from "../reqApi/Posts";
import Footer from "../components/default/Footer";
const UpdatePost = memo(() => {
  const [category, setCategory] = useState([]);
  const [dataPost, setDataPost] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [content, setContent] = useState("");
  const [cruAvatar, setCruAvatar] = useState("");
  const user = useSelector((state) => state.auth.login.user_data);
  const navigate = useNavigate();
  const dispath = useDispatch();
  const post_id = useLocation().pathname.split("/")[2];

  //get categories
  useEffect(() => {
    const getCat = async () => {
      const res = await axios.get(process.env.REACT_APP_URL_API + `category`);
      setCategory(res.data.data);
    };
    const getPost = async () => {
      const res = await axios.get(
        process.env.REACT_APP_URL_API + `posts/${post_id}`
      );
      setDataPost(res.data.data);
    };
    getCat();
    getPost();
  }, []);

  const handleSubmitPost = (values) => {
    values.post_desc = content ? content : dataPost.post_desc;
    const file = values.post_thumb[0];
    const formData = new FormData();
    formData.append("file", file);
    _.forIn(values, (value, key) => {
      formData.append(key, value);
    });

    UpdatePostAPI(user.id, post_id, formData, navigate, dispath);
  };

  //create image preview
  useEffect(() => {
    if (watch("post_thumb")) {
      if (watch("post_thumb")[0]) {
        cruAvatar && URL.revokeObjectURL(cruAvatar);
        const file = watch("post_thumb")[0];
        file.preview = URL.createObjectURL(file);
        return setCruAvatar(file.preview);
      }
    }
  }, [watch("post_thumb")]);

  return (
    <Wrapper>
      <Header />
      {Object.keys(user).length === 0 ? (
        <Button
          name={"Login"}
          handleOnClick={() => navigate("/login")}
          size="l"
          type="main"
        />
      ) : (
        <section className="px-3 md:px-5 lg:px-32 xl:px-40 w-full mb-5">
          {category && dataPost ? (
            <FormC handleSubmit={handleSubmit} onSubmit={handleSubmitPost}>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 min-h-screen">
                <div className="col-span-1 lg:col-span-3 flex flex-col gap-2">
                  <img
                    src={
                      cruAvatar ||
                      process.env.REACT_APP_URL_API_IMAGE + dataPost.post_thumb
                    }
                    alt=""
                    className="w-full h-96 object-cover"
                  />
                  <InputC
                    type={"text"}
                    label={"Title"}
                    name={"post_title"}
                    register={register}
                    rules={{ required: "Title is required" }}
                    valuesOfText={dataPost.post_title}
                    error={errors.post_title}
                  />
                  <div className="flex flex-col gap-2">
                    <label htmlFor={""} className="font-medium">
                      Content
                    </label>
                    <ReactQuill
                      theme="snow"
                      className={`w-full mb-10 h-96 outline-none`}
                      value={content || dataPost.post_desc}
                      onChange={setContent}
                    />
                  </div>
                </div>
                <div className="col-span-1 flex flex-col gap-2">
                  <InputRadio
                    label="Categoies"
                    name="category_id"
                    valueOfRadio={category}
                    checked={dataPost.dataCategory.category_id}
                    register={register}
                  />

                  <InputC
                    type={"file"}
                    label={"Banner"}
                    name={"post_thumb"}
                    register={register}
                  />
                  <Button type="main" size="s" name="Update post"></Button>
                </div>
              </div>
            </FormC>
          ) : (
            "..."
          )}
        </section>
      )}
      <Footer />
    </Wrapper>
  );
});

export default UpdatePost;
