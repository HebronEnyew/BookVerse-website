import axios from 'axios';
const API_URL = "https://www.googleapis.com/books/v1/volumes"

const DEFAULT_QUERY = "bestsellers";

export async function fetchBooks(query) {
    const searchTerm = query && query.trim() ? query : DEFAULT_QUERY;
    try {
        const response = await axios.get(API_URL, {
            params: {
                q: searchTerm,
                orderBy: 'relevance',
                maxResults: 10
            }
        });
        return response.data.items || [];
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
}
