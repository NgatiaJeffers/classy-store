import axios, { AxiosResponse } from "axios";

import { Category } from "@/types";

export const revalidate = 3600;

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
    try {
        const res: AxiosResponse<Category[]> = await axios.get<Category[]>(url);

        if (res.status !== 200) {
            throw new Error(`API request failed with status code ${res.status}`);
        }

        const data = res.data
        return data;
    } catch (error) {
        console.error("Error fetching categoory data:", error);
        throw error;
    }
};

export default getCategories;