import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateAvatarAPI } from "../reqApi/User";
import Button from "./default/Button";
import FormC from "./FormController/FormC";
import InputC from "./FormController/InputC";

const UpdateAvatarView = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [cruAvatar, setCruAvatar] = useState("");

  //create image preview
  useEffect(() => {
    if (watch("user_avatar")) {
      if (watch("user_avatar")[0]) {
        cruAvatar && URL.revokeObjectURL(cruAvatar);
        const file = watch("user_avatar")[0];
        file.preview = URL.createObjectURL(file);
        return setCruAvatar(file.preview);
      }
    }
  }, [watch("user_avatar")]);

  const handleUpdateAvatar = (values) => {
    if (values.user_avatar.length > 0) {
      const formData = new FormData();
      formData.append("file", values.user_avatar[0]);
      updateAvatarAPI(user.id, formData, navigate, dispatch);
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <img
        src={
          cruAvatar || process.env.REACT_APP_URL_API_IMAGE + user.user_avatar
        }
        className="w-40 h-40 object-cover mx-auto rounded-full shadow-lg"
      />
      <FormC handleSubmit={handleSubmit} onSubmit={handleUpdateAvatar}>
        <InputC
          type={"file"}
          label={"Chose avatar"}
          name={"user_avatar"}
          register={register}
        />

        <Button
          type="main"
          size="l"
          name="Update"
          disabled={
            watch("user_avatar") && watch("user_avatar").length > 0
              ? false
              : true
          }
        ></Button>
      </FormC>
    </div>
  );
};

export default UpdateAvatarView;
