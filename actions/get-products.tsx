import axios, { AxiosResponse } from "axios";
import qs from "query-string";

import { Product } from "@/types";

export const revalidate = 3600;

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
    try {
        const url = qs.stringifyUrl({
            url: URL,
            query: {
                colorId: query.colorId,
                sizeId: query.sizeId,
                categoryId: query.categoryId,
                isFeatured: query.isFeatured,
            },
        });

        const res: AxiosResponse<Product[]> = await axios.get<Product[]>(url);

        if (res.status !== 200) {
            throw new Error(`API request failed with status code ${res.status}`);
        }

        const data = res.data
        return data;
    } catch (error) {
        console.error("Error fetching product data:", error);
        throw error;
    }
};

export default getProducts;