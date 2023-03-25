import axios from "axios";
import { Notify } from "../components/default/Notify";
import { checkTokenExpired } from "./CheckTokenExpired";

export const CreatePostAPI = async (user_id, formData, navigate, dispath) => {
  const res = await axios.post(
    process.env.REACT_APP_URL_API + `posts/create-post/${user_id}`,
    formData
  );
  if (!checkTokenExpired(res, dispath)) {
    Notify(res.data.status, res.data.message);
    if (!(res.data.status === "error")) navigate("/information");
  }
};
export const UpdatePostAPI = async (
  user_id,
  post_id,
  formData,
  navigate,
  dispath
) => {
  const res = await axios.put(
    process.env.REACT_APP_URL_API + `posts/update-post/${user_id}/${post_id}`,
    formData
  );
  if (!checkTokenExpired(res, dispath)) {
    Notify(res.data.status, res.data.message);
    // navigate("/information")
  }
};
export const DeletePostAPI = async (user_id, post_id, navigate, dispath) => {
  const res = await axios.delete(
    process.env.REACT_APP_URL_API + `posts/delete-post/${user_id}/${post_id}`
  );
  if (!checkTokenExpired(res, dispath)) {
    Notify(res.data.status, res.data.message);
    return res.data.data;
  }
};
