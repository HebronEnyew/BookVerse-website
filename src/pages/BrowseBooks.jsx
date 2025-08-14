import React from 'react';
import { useLocation } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { fetchBooks } from '../services/booksApi';  
import { toast } from 'react-toastify';

const BrowseBooks = () => {
  const [books, setBooks] = React.useState([]);
  const [selectedBook, setSelectedBook] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("query") || "";

  // Fetch books based on search
  React.useEffect(() => {
    setLoading(true)
    if (searchTerm) {
      fetchBooks(searchTerm).then(setBooks).catch(err => {
        toast.error(`Failed to fetch search results ${err}`);
      });
    }
    setLoading(false)
  }, [searchTerm]);

  // Fetch default books
  React.useEffect(() => {
    const getBooks = async () => {
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
        setLoading(true);
        const allBooks = queries.map(q => fetchBooks(q));
        const results = await Promise.all(allBooks);
        setBooks(results.flat());
        setLoading(false);
      } catch (error) {
        toast.error(`Failed to fetch books ${error}`);
      }
    };

    if (!searchTerm) getBooks();
  }, [searchTerm]);

  if(loading) {
    return(
      <p className="text-center mt-[300px] text-secondaryColor text-2xl">Loading Available Books</p>
    )
  }
  if (!books || books.length === 0) {
    return (
      <p className="text-center mt-12 text-[#7c7c7c] text-lg">
        No books found. Try searching something else!
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
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.volumeInfo?.title}
            author={book.volumeInfo?.authors?.[0] || 'Unknown Author'}
            image={book.volumeInfo?.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192?text=No+Image'}
            onClick={() => setSelectedBook(book)}
          />
        ))}
      </div>

      {selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-2">
              {selectedBook.volumeInfo?.title}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              {selectedBook.volumeInfo?.authors?.join(', ')}
            </p>
            <img
              src={
                selectedBook.volumeInfo?.imageLinks?.thumbnail ||
                'https://via.placeholder.com/128x192?text=No+Image'
              }
              alt={selectedBook.volumeInfo?.title}
              className="mx-auto mb-4"
            />
            <p className="text-gray-700">
              {selectedBook.volumeInfo?.description || 'No description available.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BrowseBooks;
