import axios from "axios";
import { Camper } from "../types/types";

interface fetchCampersResponse {
    total: number,
    items: Camper[],
}

export const getCampers = async () => {
    const res = await axios.get<fetchCampersResponse>("https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers");
    return res.data;
}