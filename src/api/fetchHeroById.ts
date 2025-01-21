import { Hero } from "../Dashboard/pages/interface";
import characterApi from "./characterApi";

export const fetchHeroById = async (heroId: string) => {
    try {
        const response: Hero = await characterApi.get(`/${heroId}`);

        return response.data.data.results[ 0 ];
    } catch (error) {
        console.error('Error fetching hero:', error);
        return null;
    }
};
