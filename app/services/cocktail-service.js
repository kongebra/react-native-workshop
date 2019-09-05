import http from "../../http-service";
import { API_URL } from "../../api-config";

export async function getRandomCocktail() {
    return await http.get(API_URL.RANDOM_COCKTAIL);
}

export async function searchByIngredient(ingredient) {
    return await http.get(`${API_URL.SEARCH_BY_INGREDIENT}${ingredient}`);
}
