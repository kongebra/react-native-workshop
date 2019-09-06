import http from "../../http-service";
import { API_URL } from "../../api-config";

export async function getRandomCocktail() {
    return await http.get(API_URL.RANDOM_COCKTAIL);
}

export async function getCocktailById(id) {
    return await http.get(`${API_URL.FULL_DETAIL_BY_ID}${id}`);
}
