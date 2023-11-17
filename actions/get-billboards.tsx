import { Billboard } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
    const res = await fetch(`${url}/${id}`)
                            .then(response => {
                                return response.json()
                            })
    console.log(res)
    return res || null;
};

export default getBillboard;
