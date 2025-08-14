import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext'

const BookCard = ({ id, title, author, image }) => {
  const { user, openAuthModal } = useAuth();
  const [isFav, setIsFav] = useState(false);
  
  const toggleFav = () => {
    
   if (!user) {
      openAuthModal('signin');
    return;
  }
  const favs = JSON.parse(localStorage.getItem('favorites')) || [];

  if (isFav) {
    const updatedFavs = favs.filter(book => book.id !== id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavs));
    setIsFav(false);
  } else {
    localStorage.setItem('favorites', JSON.stringify([...favs, { id, title, author, image }]));
    setIsFav(true);
  }
};

useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    const found = favs.some(book => book.id === id);
    setIsFav(found);
  }, [id]);
 
  return (
    <div className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover mb-3 rounded"
      />
      <h3 className="text-lg font-semibold text-[#7c7c7c]">{title}</h3>
      <p className="text-sm text-[#b45309]">{author}</p>
      <div className='flex gap-2 mt-3'>
      <button className='px-2 py-1 text-sm text-gray-800 rounded-full bg-cream hover:bg-secondaryColor hover:text-white'>
        <Link to={`/books/${id}`}>
           View More
        </Link>
        
      </button>

      <button
        onClick={toggleFav}
        className={`px-3 py-1 text-sm rounded-full transition
          ${isFav
            ? 'bg-secondaryColor text-white hover:text-secondaryColor hover:bg-cream' 
            : 'bg-white text-pink-500 hover:bg-secondaryColor hover:text-white '
          }`}
      >
        {isFav ? (
          <>
            <span>Unfavorite</span> <span className="ml-1">💔</span>
          </>
        ) : (
          <div><span>Favorite</span> <span>❤️</span></div>
        )}
      </button>
    </div>
    </div>
  );
};

export default BookCard;