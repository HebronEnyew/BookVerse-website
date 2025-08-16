import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiHeart } from 'react-icons/fi';

const BookCard = ({ book }) => {
  const { user, openAuthModal } = useAuth();
  const [isFavorited, setIsFavorited] = useState(false);

  // Check if book data is valid
  const isValidBook = book && book.id && book.volumeInfo;

  // Check favorite status on initial render
  useEffect(() => {
    if (!isValidBook) return;
    
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorited(favorites.some(favBook => favBook.id === book.id));
  }, [book, isValidBook]);

  const toggleFavorite = () => {
    if (!user) {
      openAuthModal('signin');
      return;
    }

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let updatedFavorites;

    if (isFavorited) {
      updatedFavorites = favorites.filter(favBook => favBook.id !== book.id);
    } else {
      updatedFavorites = [...favorites, {
        id: book.id,
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors?.join(', '),
        image: book.volumeInfo.imageLinks?.thumbnail,
        volumeInfo: book.volumeInfo
      }];
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorited(!isFavorited);
  };

  if (!isValidBook) {
    return null; // Don't render anything for invalid books
  }

  const { title, authors, imageLinks } = book.volumeInfo;
  const imageUrl = imageLinks?.thumbnail || 'https://via.placeholder.com/150x200?text=No+Cover';
  
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 border border-amber-100 h-full flex flex-col">
      {/* Book Cover */}
      <div className="flex-1 flex items-center justify-center bg-amber-50 mb-3 rounded overflow-hidden">
        <img
          src={imageUrl}
          alt={title || 'Untitled'}
          className="h-[100%] object-contain"
        />
      </div>

      {/* Book Info */}
      <div className="mb-3 flex-1">
        <h3 className="text-lg font-semibold text-gray-700 line-clamp-2">
          {title || 'Untitled'}
        </h3>
        <p className="text-sm text-amber-700 line-clamp-1">
          {authors?.join(', ') || 'Unknown Author'}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        <Link
          to={`/books/${book.id}`}
          className="px-3 py-1 text-sm bg-amber-100 text-amber-800 rounded-full hover:bg-amber-200 transition-colors"
        >
          View Details
        </Link>
        
        <button
          onClick={toggleFavorite}
          className={`p-2 rounded-full transition-colors ${
            isFavorited
              ? 'text-amber-600 hover:text-amber-700'
              : 'text-gray-400 hover:text-amber-500'
          }`}
          aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
        >
          <FiHeart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
        </button>
      </div>
    </div>
  ); 
};

export default BookCard;