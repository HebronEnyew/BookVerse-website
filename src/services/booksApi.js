import axios from 'axios';
const API_URL = "https://www.googleapis.com/books/v1/volumes"

export async function fetchBooks(query) {
    try {
        const data = await axios.get(API_URL, {
            params: {
                q: query
            }
        });
        return data.items || [];
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
}
