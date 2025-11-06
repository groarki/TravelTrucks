import axios from "axios";
import { Camper } from "../types/types";

export interface fetchCampersResponse {
    total: number,
    items: Camper[],
}

interface CamperFilters {
  location?: string;
  AC?: boolean;
  transmission?: string | null;
  kitchen?: boolean;
  TV?: boolean;
  bathroom?: boolean;
  form?: "van" | "fullyIntegrated" | "alcove" | null;
} 

export const getCampers = async (page: number, filters?: CamperFilters) => {
    const limit = 4;

    const params = {
        page,
        limit,
        ...filters
    };

    const res = await axios.get<fetchCampersResponse>(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers`, {params});
    console.log(res.data);
    return res.data;
};