import axios from "axios";
import { Camper } from "../types/types";

interface fetchCampersResponse {
    total: number,
    items: Camper[],
}

export const getCampers = async (page: number) => {
    const limit = 4;
    const res = await axios.get<fetchCampersResponse>(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?page=${page}&limit=${limit}`);
    console.log(res.data);
    return res.data;
}