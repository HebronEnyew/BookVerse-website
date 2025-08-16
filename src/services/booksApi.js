// services/booksApi.js
export const fetchBooks = async (query) => {
  const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=8`;

  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to fetch books for query: ${query}. Status: ${res.status}. Response: ${errorText}`);
    }
    const data = await res.json();
    return data.items || [];
  } catch (error) {
    console.error(error);
    // Re-throw the error to be caught by the component's useEffect
    throw error;
  }
};