import { cache } from "react";

import { Category } from "@/types";

export const revalidate = 3600;

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = cache(async (): Promise<Category[]> => {
    const res = await fetch(url, { next: { revalidate: 3600 } } )
                            .then((response) => {
                                return response.json()
                            });
    return res || null;
})

export default getCategories;