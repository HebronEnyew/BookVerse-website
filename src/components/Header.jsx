import React from 'react'
 import { FiBook, FiSearch, FiHeart, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="bg-amber-800 text-amber-50 shadow-lg sticky top-0 z-50 py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="flex items-center space-x-2 group">
            <FiBook className="w-6 h-6 text-amber-200 group-hover:text-amber-300 transition-colors" />
            <h1 className="text-2xl font-serif font-bold tracking-wide">
              VALERIE-READS
            </h1>
          </Link>

  
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-200" />
              <input
                type="text"
                placeholder="Search books..."
                className="pl-10 pr-4 py-2 rounded-full text-sm bg-amber-700 text-amber-50 placeholder-amber-200 
                          focus:outline-none focus:ring-2 focus:ring-amber-500 border border-amber-600"
              />
            </div>

            <div className="flex items-center space-x-6">
              <Link 
                to="/" 
                className="font-medium hover:text-amber-200 transition-colors flex items-center"
              >
                Home
              </Link>
              <Link 
                to="/browse" 
                className="font-medium hover:text-amber-200 transition-colors flex items-center"
              >
                Browse
              </Link>
              <Link 
                to="/favorites" 
                className="font-medium hover:text-amber-200 transition-colors flex items-center"
              >
                <FiHeart className="mr-1" /> Favorites
              </Link>
            </div>

            <div className="flex items-center space-x-4 ml-4">
              <Link 
                to="/login" 
                className="px-4 py-2 rounded-md hover:bg-amber-700 transition-colors"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-md transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </nav>

          <button className="md:hidden flex text-amber-50 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
          </button>
        </div>

        <div className="md:hidden  flex bg-amber-700 px-4 py-3 hidden">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Search books..."
              className="w-full pl-10 pr-4 py-2 rounded-full text-sm bg-amber-800 text-amber-50 
                        placeholder-amber-200 focus:outline-none border border-amber-600"
            />
            <Link to="/" className="font-medium hover:text-amber-200 transition-colors">
              Home
            </Link>
            <Link to="/browse" className="font-medium hover:text-amber-200 transition-colors">
              Browse
            </Link>
            <Link to="/favorites" className="font-medium hover:text-amber-200 transition-colors flex items-center">
              <FiHeart className="mr-2" /> Favorites
            </Link>
            <div className="pt-2 border-t border-amber-600">
              <Link to="/login" className="block w-full text-center py-2 hover:bg-amber-600 rounded-md transition-colors">
                Login
              </Link>
              <Link to="/signup" className="block w-full text-center bg-amber-600 hover:bg-amber-700 py-2 rounded-md transition-colors mt-2">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header