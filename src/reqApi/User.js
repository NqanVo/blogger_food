import axios from "axios"
import { Notify } from "../components/default/Notify"
import { loginSuccess } from "../redux/slice/auth"
import { checkTokenExpired } from "./CheckTokenExpired"



export const updateInfoAPI = async (user_id, values, navigate, dispath) => {
    const res = await axios.put(process.env.REACT_APP_URL_API + `users/update/${user_id}`, values)
    if (!checkTokenExpired(res, dispath)) {
        Notify(res.data.status, res.data.message)
        dispath(loginSuccess(res.data.data))
        localStorage.setItem("user_data", JSON.stringify(res.data.data))
        navigate("/information")
    }
}