import React from 'react'

const BookCard = () => {
  return (
    <div className="bg-amber-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-amber-100">
      <div className="h-64 bg-amber-100 flex items-center justify-center p-4">
        <div className="text-amber-800 text-center">
          <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
          </svg>
          <span className="text-sm">Book Cover</span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-gray-700 text-lg mb-1 line-clamp-2">Sample Book Title</h3>
        <p className="text-gray-500 text-sm mb-3">By Author Name</p>
        <div className="flex justify-between items-center">
          <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">2023</span>
          <button className="text-amber-700 hover:text-amber-900">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookCard