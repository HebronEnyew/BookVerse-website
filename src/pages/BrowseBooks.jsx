import React from 'react';
import { useLocation } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { fetchBooks } from '../services/booksApi'; 
import { toast } from 'react-toastify';

const BrowseBooks = () => {
  const [books, setBooks] = React.useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("query") || "";

  React.useEffect(() => {
    const fetchBooksForQuery = async (query) => {
      try {
        const booksData = await fetchBooks(query);
        setBooks(booksData);
      } catch (err) {
        toast.error(`Failed to fetch search results: ${err.message}`);
      }
    };

    const fetchDefaultBooks = async () => {
      const queries = [
        'it ends with us',
        'verity',
        'the song of achilles',
        'the seven husbands of evelyn hugo',
        'a court of thorns and roses',
        'people we meet on vacation',
        'fourth wing',
        'iron flame',
        'the inheritance games',
        'shatter me',
        'we were liars',
        'harry potter',
        'colleen hoover',
        'bestseller',
        'psychology'
      ];

      try {
        const allBooksPromises = queries.map(q => fetchBooks(q));
        // Promise.allSettled is more robust for multiple API calls
        const results = await Promise.allSettled(allBooksPromises);
        
        const validBooks = results.flatMap(result => 
          result.status === 'fulfilled' ? result.value : []
        );

        setBooks(validBooks);
      } catch (error) {
        toast.error(`Failed to fetch books: ${error.message}`);
      }
    };

    if (searchTerm) {
      fetchBooksForQuery(searchTerm);
    } else {
      fetchDefaultBooks();
    }
  }, [searchTerm]);

  if (!books || books.length === 0) {
    return (
      <p className="text-center mt-12 text-[#7c7c7c] text-lg">
        {searchTerm ? `No results found for "${searchTerm}".` : 'Try searching...'}
      </p>
    );
  }

  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      {searchTerm && (
        <h1 className="text-2xl font-bold mb-6">
          Results for "{searchTerm}"
        </h1>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map(book => (
          <BookCard 
            key={book.id} 
            book={book} 
          />
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;