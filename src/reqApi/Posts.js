import axios from "axios"
import { Notify } from "../components/default/Notify"

export const DeletePostAPI = async (user_id, post_id) => {
    const res = await axios.delete(process.env.REACT_APP_URL_API + `posts/delete-post/${user_id}/${post_id}`)
    Notify(res.data.status, res.data.message)
    return res.data.data
}

