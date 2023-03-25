import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateInfoAPI, updatePasswordAPI } from "../reqApi/User";
import Button from "./default/Button";
import FormC from "./FormController/FormC";
import InputC from "./FormController/InputC";

import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const UpdatePasswordView = (props) => {
  const { user } = props;
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispath = useDispatch();
  const navigate = useNavigate();

  //update
  const handleUpdatePassword = async (values) => {
    const formData = new FormData();
    formData.append("user_password_old", values.user_password_old);
    formData.append("user_password", values.user_password_new);
    updatePasswordAPI(user.id, formData, navigate, dispath);
  };
  return (
    <>
      <div>
        <FormC handleSubmit={handleSubmit} onSubmit={handleUpdatePassword}>
          <InputC
            type={"password"}
            label={"Old Password"}
            name={"user_password_old"}
            register={register}
            rules={{ required: true }}
            error={errors.user_password_old}
          />
          <InputC
            type={"password"}
            label={"New Password"}
            name={"user_password_new"}
            register={register}
            rules={{
              required: true,
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              maxLength: {
                value: 20,
                message: "Password cannot be longer than 20 characters",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/,
                message:
                  "Passwords are between 6 and 20 characters long, including numbers, lowercase letters, uppercase letters",
              },
            }}
            error={errors.user_password_new}
          />
          <InputC
            type={"password"}
            label={"Comfirm New Password"}
            name={"user_password_new_comfirm"}
            register={register}
            rules={{
              required: true,
              validate: (value) =>
                value === watch("user_password_new") ||
                "Passwords do not match",
            }}
            error={errors.user_password_new_comfirm}
          />
          <Button
            type="main"
            size="l"
            name="Update"
            disabled={
              watch("user_password_old") &&
              watch("user_password_new") &&
              watch("user_password_new_comfirm")
                ? false
                : true
            }
          ></Button>
        </FormC>
      </div>
    </>
  );
};

export default UpdatePasswordView;
