import characterApi from "./characterApi";

export const fetchHeroes = async () => {
    try {
        const response = await characterApi.get('', {
            params: {
                limit: 20,
            },
        });
        return response.data.data.results;
    } catch (error) {
        console.error('Error fetching heroes:', error);
        return [];
    }
};

fetchHeroes();
