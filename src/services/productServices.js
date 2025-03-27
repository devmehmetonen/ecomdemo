import { get } from "@/utils/httpHelper";

export const getProducts = async() =>{
    return await get('/products')
}