import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();           
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Book not found');
        return res.json();
      })
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false); 
      });
  }, [id]);

  if (loading) return <div className="p-6">Loading book details...</div>;
  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;
  if (!book) return <div className="p-6">No book data found.</div>;

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-amber-50 m-4 rounded-lg shadow-md">
      <div className="bg-amber-50 rounded-lg md:w-[25%] w-[80%] shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-amber-100">
        <div className="h-64 bg-amber-100 flex items-center justify-center p-4">
          {book.volumeInfo.imageLinks?.thumbnail ? (
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
              className="max-h-full object-contain"
            />
          ) : (
            <div className="text-amber-800 text-center">
              <svg
                className="w-16 h-16 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span className="text-sm">Book Cover</span>
            </div>
          )}
        </div>

        <div className="p-5">
          <h3 className="font-bold text-gray-700 text-lg mb-1 line-clamp-2">
            {book.volumeInfo.title}
          </h3>
          <p className="text-gray-500 text-sm mb-3">
            By {book.volumeInfo.authors?.join(', ') || 'Unknown author'}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
              {book.volumeInfo.publishedDate || 'Unknown date'}
            </span>
            <a
              href={book.volumeInfo.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Read Preview on Google Books
            </a>

            <button className="text-amber-700 hover:text-amber-900" aria-label="Add to favorites">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
