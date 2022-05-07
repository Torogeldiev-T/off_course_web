import { $authHost, $host } from "./index";


export const getUserProfile = async (userId) => {
    
    const { data } = await $host.get("api/profile/" + userId)

    return data
}