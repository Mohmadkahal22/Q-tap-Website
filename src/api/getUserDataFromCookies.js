import useUserStore from "@/store/userStore";
import { BASE_URL } from "@/utils/constants";
import axios from "axios";


export const getUserDataFromCookies = async () => {

    try {
        const res = await axios.post(`${BASE_URL}checkCookies`, {}, {
            withCredentials: true
        })

        console.log("data from getUserDataFromCookies", res)
        return res.data.user
    } catch (error) {
        throw new Error(error.message)
    }
}
