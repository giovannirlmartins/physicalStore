import axios from "axios";


const OPEN_CAGE_API_KEY = "";

export async function getCoordinates(logradouro: string, bairro: string, localidade: string, estado: string) {
    try {
        const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
            params: {
                q: `${logradouro}, ${bairro}, ${localidade}, ${estado}, Brasil`,
                key: OPEN_CAGE_API_KEY
            }
        });

        const { lat, lng } = response.data.results[0].geometry;
        return { latitude: lat, longitude: lng };
    } catch (error) {
        throw new Error("Erro ao buscar coordenadas.");
    }
}


