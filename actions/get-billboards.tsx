import { cache } from "react";

import { Billboard } from "@/types";

export const revalidate = 3600;

const url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = cache(async (id: string): Promise<Billboard> => {
    const res = await fetch(`${url}/${id}`)
                            .then(response => {
                                return response.json()
                            })
    return res || null;
});

export default getBillboard;
