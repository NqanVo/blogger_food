import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/default/Button";
import Header from "../components/default/Header";
import Wrapper from "../components/default/Wrapper";
import FormC from "../components/FormController/FormC";
import InputC from "../components/FormController/InputC";
import _ from "lodash";
import Footer from "../components/default/Footer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputRadio from "../components/FormController/InputRadio";
import { CreatePostAPI } from "../reqApi/Posts";

const CreatePost = () => {
  const [category, setCategory] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [content, setContent] = useState("");
  const [cruAvatar, setCruAvatar] = useState(
    "https://image-assets.eu-2.volcanic.cloud/api/v1/assets/images/28728ddd294b901834ed795e605dfa98?t=1674127305&webp_fallback=png"
  );
  const user = useSelector((state) => state.auth.login.user_data);
  const navigate = useNavigate();
  const dispath = useDispatch();

  //get categories
  useEffect(() => {
    const getCat = async () => {
      const res = await axios.get(process.env.REACT_APP_URL_API + `category`);
      setCategory(res.data.data);
    };
    getCat();
  }, []);

  const handleSubmitPost = (values) => {
    values.post_desc = content;
    const file = values.post_thumb[0];
    const formData = new FormData();

    formData.append("file", file);
    _.forIn(values, (value, key) => {
      formData.append(key, value);
    });
    CreatePostAPI(user.id, formData, navigate, dispath);
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
          <FormC handleSubmit={handleSubmit} onSubmit={handleSubmitPost}>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 min-h-screen">
              <div className="col-span-1 lg:col-span-3 flex flex-col gap-2">
                <img
                  src={cruAvatar}
                  alt=""
                  className="w-full h-96 object-cover"
                />
                <InputC
                  type={"text"}
                  label={"Title"}
                  name={"post_title"}
                  register={register}
                  rules={{ required: "Title is required" }}
                  error={errors.post_title}
                />
                <div className="flex flex-col gap-2">
                  <label htmlFor={""} className="font-medium">
                    Content
                  </label>
                  <ReactQuill
                    theme="snow"
                    className={`w-full mb-10 h-96 outline-none`}
                    value={content}
                    onChange={setContent}
                  />
                </div>
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <InputRadio
                  label="Categoies"
                  name="category_id"
                  valueOfRadio={category}
                  register={register}
                />

                <InputC
                  type={"file"}
                  label={"Banner"}
                  name={"post_thumb"}
                  register={register}
                  rules={{ required: "Banner is required" }}
                  error={errors.post_thumb}
                />
                <Button type="main" size="s" name="Create new post"></Button>
              </div>
            </div>
          </FormC>
        </section>
      )}
      <Footer />
    </Wrapper>
  );
};

export default CreatePost;
