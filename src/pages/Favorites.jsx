import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const { user, openAuthModal } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  // Load favorites once
  useEffect(() => {
    if (!user) {
      openAuthModal('signin');
      navigate('/');
      return;
    }

    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favs);
  }, [user, openAuthModal, navigate]);

  if (!user) return null;

  // Remove a book from favorites
  const removeFavorite = (bookId) => {
    const updatedFavs = favorites.filter((book) => book.id !== bookId);
    setFavorites(updatedFavs);
    localStorage.setItem('favorites', JSON.stringify(updatedFavs));
  };

  if (favorites.length === 0) {
    return (
      <div className="p-6 text-center text-gray-600">
        You have no favorite books saved yet.
      </div>
    );
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {favorites.map((book) => (
        <div key={book.id} className="bg-white rounded-lg shadow p-4">
          {book.volumeInfo?.imageLinks?.thumbnail ? (
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
              className="w-[80%] h-48 object-cover mb-3 rounded"
            />
          ) : (
            <div className="h-48 flex items-center justify-center bg-gray-200 rounded mb-3">
              No Image
            </div>
          )}
          <h3 className="text-lg font-semibold mb-1">
            {book.volumeInfo?.title || 'Untitled'}
          </h3>
          <p className="text-sm text-gray-600">
            {book.volumeInfo?.authors?.join(', ') || 'Unknown author'}
          </p>

          <button
            onClick={() => removeFavorite(book.id)}
            className="mt-3 px-3 py-1 rounded bg-red-500 text-white"
          >
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
