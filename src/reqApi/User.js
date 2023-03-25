import axios from "axios";
import { Notify } from "../components/default/Notify";
import { loginSuccess } from "../redux/slice/auth";
import { checkTokenExpired } from "./CheckTokenExpired";

export const updateInfoAPI = async (user_id, values, navigate, dispath) => {
  const res = await axios.put(
    process.env.REACT_APP_URL_API + `users/update/${user_id}`,
    values
  );
  if (!checkTokenExpired(res, dispath)) {
    Notify(res.data.status, res.data.message);
    dispath(loginSuccess(res.data.data));
    localStorage.setItem("user_data", JSON.stringify(res.data.data));
    navigate("/information");
  }
};

export const updateAvatarAPI = async (user_id, values, navigate, dispath) => {
  const res = await axios.put(
    process.env.REACT_APP_URL_API + `users/update-avatar/${user_id}`,
    values
  );
  if (!checkTokenExpired(res, dispath)) {
    Notify(res.data.status, res.data.message);
    dispath(loginSuccess(res.data.data));
    localStorage.setItem("user_data", JSON.stringify(res.data.data));
    navigate("/information");
  }
};

export const updatePasswordAPI = async (user_id, values, navigate, dispath) => {
  const res = await axios.put(
    process.env.REACT_APP_URL_API + `users/update-password/${user_id}`,
    values
  );
  if (!checkTokenExpired(res, dispath)) {
    const status = res.data.status;
    const message = res.data.message;
    Notify(status, message);
  }
};
