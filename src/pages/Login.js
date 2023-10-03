import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../components/default/Wrapper";
import { useForm } from "react-hook-form";

import Button from "../components/default/Button";
import { LoginApi } from "../reqApi/Auth";
import { useDispatch } from "react-redux";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispath = useDispatch();
  const onLogin = (data) => {
    LoginApi(data, navigate, dispath);
  };
  return (
    <Wrapper>
      <div className="relative w-full max-h-screen h-screen overflow-hidden">
        <img
          className="inset-0 w-full h-full object-cover"
          src="https://fox4kc.com/wp-content/uploads/sites/16/2022/07/GettyImages-1326917407.jpg?w=2560&h=1440&crop=1"
          alt=""
        />
        <div className="absolute inset-0 bg-black/60 blur-[2px]" />
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 min-w-[400px] min-h-max bg-white p-5 flex flex-col gap-4 justify-between">
          <h1 className="text-center">Login</h1>
          <form
            className="w-full flex flex-col gap-4"
            encType="multipart/form-data"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                type="email"
                className={`border-2 w-full outline-none px-4 py-2 ${
                  errors.user_email && "border-red-400"
                }`}
                {...register("user_email", {
                  required: true,
                })}
              />
              {errors.user_email && (
                <span className="text-red-400">Email is required</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="font-medium">
                Password
              </label>
              <input
                type="password"
                className={`border-2 w-full outline-none px-4 py-2 ${
                  errors.user_password && "border-red-400"
                }`}
                {...register("user_password", {
                  required: true,
                })}
              />
              {errors.user_password && (
                <span className="text-red-400">Password is required</span>
              )}
            </div>
            <Button
              type="main"
              size="l"
              name="Login"
              handleOnClick={handleSubmit(onLogin)}
            ></Button>
          </form>
          <div className="flex justify-between">
            <Link to={"/"}>
              <h3 className="text-base">Back home page</h3>{" "}
            </Link>
            <Link to={"/register"}>
              <h3 className="text-base">Register</h3>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
