import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
 import { FiBook, FiSearch, FiHeart, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
import { signOut } from 'firebase/auth';  
import { auth } from '../pages/firebase';
import { useAuth } from '../context/AuthContext';


const Header = ({onSearch, onBrowse}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, openAuthModal } = useAuth();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!searchTerm.trim()) return;
    onSearch(searchTerm, navigate);
    setSearchTerm('');
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogOut = async()=>{
    await signOut(auth);
  }

  return (
    <header className="bg-white text-gray-800 shadow-lg sticky top-0 z-50 py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="flex items-center space-x-2 group">
            <FiBook className="w-6 h-6 text-amber-600 group-hover:text-amber-500 transition-colors" />
            <h1 className="text-2xl font-serif font-bold tracking-wide">
              valerie<span className="text-[#b45309]">READS</span>
            </h1>
          </Link>

  
          <nav className="hidden md:flex items-center space-x-8">
            

            <div className="flex items-center space-x-6">
              <Link 
                to="/" 
                className="font-medium rounded-md px-2 hover:text-amber-600 transition-colors flex items-center hover:border-b-2 hover:border-amber-300"
              >
                Home
              </Link>
              <Link 
                to="/browse" 
                className="font-medium rounded-md px-2 hover:text-amber-600 transition-colors flex items-center hover:border-b-2 hover:border-amber-300"
              >
                Browse
              </Link>
              <button
                onClick={() => {
                  if (!user) return openAuthModal("signin");
                  navigate("/favorites");
                }}
                className="font-medium rounded-md px-2 hover:text-amber-600 transition-colors flex items-center hover:border-b-2 hover:border-amber-300"
              >
                <FiHeart className="mr-1" /> Favorites
              </button>
            </div>

            <div className="flex items-center space-x-4 ml-4">
              {!user? (
                <>
                  <Link 
                    to="/login" 
                    className="px-4 py-2 rounded-md hover:bg-amber-600 transition-colors hover:border-b-2 hover:border-amber-300"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="bg-amber-600 hover:bg-amber-600 px-4 py-2 rounded-md transition-colors hover:border-b-2 hover:border-amber-300"
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <div className='flex gap-2 items-center'>
                  <span className="font-medium">{user.displayName}</span>
                  <FiUser className="inline-block ml-2" />
                  <button 
                    onClick={handleLogOut} 
                    className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-md transition-colors"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </nav>

          <button className="md:hidden flex text-amber-600 p-2" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden  flex bg-cream px-4 py-3">
            <div className="flex flex-col space-y-4">
              <form onSubmit={handleSubmit}>
                <input
                  value={searchTerm}
                type="text"
                placeholder="Search books..."
                className="w-full pl-10 pr-4 py-2 rounded-full text-sm bg-amber-800 text-amber-50 
                          placeholder-amber-200 focus:outline-none border border-amber-600"
              />
            </form>
            <Link to="/" className="font-medium rounded-md px-2 hover:text-amber-200 transition-colors">
              Home
            </Link>
            <Link to="/browse" onClick={()=>onBrowse()} className="font-medium rounded-md px-2 hover:text-amber-200 transition-colors">
              Browse
            </Link>
            <button
                onClick={() => {
                  if (!user) return openAuthModal("signin");
                  navigate("/favorites");
                }}
                className="font-medium rounded-md px-2 hover:text-amber-200 transition-colors flex items-center"
              >
                <FiHeart className="mr-2" /> Favorites
              </button>
            {user ? (
              <div className="flex gap-2 items-center">
                <span className="font-medium">{user.displayName}</span>
                <FiUser className="inline-block ml-2" />
                <button
                  onClick={handleLogOut}
                  className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-md transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="pt-2 border-t border-amber-600">
                <Link to="/login" className="block w-full  px-2 text-center py-2 hover:bg-amber-600 rounded-md transition-colors">
                  Login
                </Link>
                <Link to="/register" className="block w-full  px-2 text-center bg-amber-600 hover:bg-amber-700 py-2 rounded-md transition-colors mt-2">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
        )}
      </div>
    </header>
  )
}

export default Header