import { configureStore } from "@reduxjs/toolkit"
import authSilce from "./slice/auth"

const store = configureStore({
    reducer: {
        auth: authSilce
    }
})

export default store