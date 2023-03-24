import { Notify } from "../components/default/Notify"
import { logout } from "../redux/slice/auth"

export const checkTokenExpired = (res, dispath) => {
    if (res.data.status === "tokenExpired") {
        Notify(res.data.status, "End of session")
        localStorage.removeItem("user_data")
        dispath(logout())
        window.location.href = "/login";
    }
    else
        return false
    return true
}