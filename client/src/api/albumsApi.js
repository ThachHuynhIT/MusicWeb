import { httpRequests } from "../utils";
export const getAllAlbum = async () => {
    try {
        const res = await httpRequests.get('album');    
        return res;
    } catch (error) {
        console.log(error)
    }
} 