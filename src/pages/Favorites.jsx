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
    console.log('loaded favorites: ',favs)
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
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
      {favorites.map((book) => (
        <div key={book.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          {book.image ? (
            <img
              src={book.image}
              alt={book.title || 'Untitled'}
              className="w-[80%] h-48 object-cover mb-3 rounded"
            />
          ) : (
            <div className="w-[80%] h-48 flex items-center justify-center bg-gray-200 mb-3 rounded">
              No Image
            </div>
          )}

          <h3 className="text-lg font-semibold mb-1 text-center">
            {book.title || 'Untitled'}
          </h3>

          <p className="text-sm text-gray-600 text-center">
            {book.author || 'Unknown author'}
          </p>

          <button
            onClick={() => removeFavorite(book.id)}
            className="mt-3 px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition"
          >
            Remove from Favorites
          </button>
        </div>
      ))}

    </div>
  );
};

export default Favorites;
