import axios, { AxiosResponse } from "axios";

import { Product } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
    try {
        const res: AxiosResponse<Product> = await axios.get<Product>(`${url}/${id}`);

        if (res.status != 200) {
            throw new Error(`API request failed with status code ${res.status}`);
        }

        const data = res.data;
        return data;
    } catch (error) {
        console.error("Error fetching product data:", error);
        throw error;
    }
}

export default getProduct;