import { Category } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

// const getCategories = async (): Promise<Category[]> => {
//     const res = await fetch(url, { next: { revalidate: 3600 } } )
//                             .then((response) => {
//                                 return response.json()
//                             });
//     console.log(url)
//     return res || null;
// }

const getCategories = async () => {
    console.log("I a called")
}

export default getCategories;