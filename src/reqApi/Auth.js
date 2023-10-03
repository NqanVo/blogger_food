import axios from "axios";
import { Notify } from "../components/default/Notify";
import {
  loginStart,
  loginSuccess,
  loginError,
  logout,
} from "../redux/slice/auth";

export const RegisterApi = (data, navigate) => {
  try {
    const handleRegister = async () => {
      const res = await axios.post(
        `${process.env.REACT_APP_URL_API}auth/register`,
        data
      );
      Notify(res.data.status, res.data.message);
      if (res.data.status === "success")
        setTimeout(() => {
          navigate("/login");
        }, 500);
    };
    handleRegister();
  } catch (error) {
    console.log(error);
  }
};

export const LoginApi = (data, navigate, dispath) => {
  try {
    dispath(loginStart());
    const hanldeLogin = async () => {
      const res = await axios.post(
        `${process.env.REACT_APP_URL_API}auth/login`,
        data
      );
      if (res.data.status === "success") {
        dispath(loginSuccess(res.data.data));
        localStorage.setItem("user_data", JSON.stringify(res.data.data));
        navigate("/");
      } else {
        dispath(loginError());
        Notify(res.data.status, res.data.message);
      }
    };
    hanldeLogin();
  } catch (error) {
    console.log(error);
    dispath(loginError());
  }
};

export const LogoutApi = (navigate, dispath) => {
  try {
    const login = async () => {
      await axios.post(process.env.REACT_APP_URL_API + "auth/logout");
      localStorage.removeItem("user_data");
      dispath(logout());
      navigate("/");
    };
    login();
  } catch (error) {
    console.log(error);
  }
};
