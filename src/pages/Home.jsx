import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchBooks } from '../services/booksApi';
import { FiChevronLeft, FiChevronRight, FiArrowRight, FiBook, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const trendyCategories = [
    'fiction',
    'self-help',
    'thriller',
    'romance',
    'business',
    'motivational',
    'contemporary'
];

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        const loadBooks = async () => {
            try {
                const randomCategory = trendyCategories[
                    Math.floor(Math.random() * trendyCategories.length)
                ];
                
                const data = await fetchBooks(randomCategory);
                setBooks(data);
                setLoading(false);

            } catch (error) {
                console.error("Error fetching books:", error);
                setLoading(false);
            }
        };
        
        loadBooks();
    }, []);


        useEffect(()=>{
          const interval = setInterval(()=>{
            setCurrentIndex(prevIndex => 
              prevIndex === books.length - 1 ? 0 : prevIndex + 1)
          }, 5000)
          return () => clearInterval(interval); 
        },[books.length])

    const nextBook = () => {
        setCurrentIndex(prevIndex => 
            prevIndex === books.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevBook = () => {
        setCurrentIndex(prevIndex => 
            prevIndex === 0 ? books.length - 1 : prevIndex - 1
        );
    };

    const book = books[currentIndex];

    const handleSearch = (e)=>{
        e.preventDefault();
        if(searchTerm.trim()){
            navigate(`/browse?query=${encodeURIComponent(searchTerm)}`)
        }
    }

    return (
        <div className="min-h-screen pb-12 text-center bg-cream" >
            <div className="relative h-[90vh] mb-[60px]  max-sm:w-[500px] pr-10 max-sm:h-[550px] mx-auto md:px-[85px] px-[10px]">
            <div
                className="absolute inset-0 bg-contain bg-center w-full "
                style={{
                backgroundImage: `url('https://booksondemand.ma/cdn/shop/products/SpicyromancebooksSet-Booksondemand.ma.png?v=1657887052')`,
                }}
            ></div>

            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                <form
                  onSubmit={handleSearch}
                  className="relative"
                >
                          <input
                            type="text"
                            value={searchTerm}
                            onChange = {(e) => {
                                e.preventDefault();
                                setSearchTerm(e.target.value);
                            }}
                            placeholder="Search books..."
                            className="pl-10 pr-4 py-2 w-[300px] mt-5 rounded-full text-sm bg-amber-50 text-gray-800 placeholder-gray-800 
                                      focus:outline-none focus:ring-2 focus:ring-amber-500 border border-amber-600"
                          />
                          <button type="submit" className="absolute md:left-[764px] mt-3 top-1/2 transform -translate-y-1/2 text-amber-600">
                            <FiSearch />
                          </button>
                </form>
            <div className="relative z-10 flex items-center justify-center h-full px-6 text-white">
                <div className="text-center max-w-2xl text-[#f8f4f8]">
                <h1 className="text-5xl font-bold mb-6 text-white">
                    Discover Worlds Between <span className="text-amber-600">Pages</span>
                </h1>
                <p className="text-lg mb-8 text-white font-semibold">
                    Explore our curated collection of trending fiction, thrilling page-turners, and transformative self-help books.
                </p>
                <button className="px-8 py-3 bg-[#b45309] rounded-md hover:bg-opacity-90 transition text-white">
                   <a href="/browse">Browse Collection</a>  <FiArrowRight className="inline ml-2" />
                </button>
                </div>
            </div>
            </div>



            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 md:px-[85px] ">
                {loading ? (
                    <div className="text-center py-20">
                        <p>Loading...</p>
                    </div>
                ) : books.length === 0 ? (
                    <div className="text-center py-20">
                        <p>No Books found.</p>
                    </div>
                ) : (
                    books && (
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative">
                            {/* Left arrow */}
                            <button 
                                onClick={prevBook}
                                className="absolute left-[-60px] top-1/2 transform-translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition"
                                aria-label="Previous book"
                            >
                                <FiChevronLeft className="w-6 h-6 text-secondaryColor" />
                            </button>

                            {/* Content */}
                            <div className="lg:w-1/2 space-y-6">
                                <h2 className="text-3xl font-bold text-primaryColor">
                                    {book.volumeInfo.title || 'Trending Now'}
                                </h2>
                                <p className="text-gray-600">
                                    {book.volumeInfo.description?.slice(0, 200) + '...' || 
                                    'Discover this trending book that everyone is talking about.'}
                                </p>
                              
                            </div>
                            
                            {/* Right arrow */}
                            
                            <div className="lg:w-1/2 relative">
                                <img
                                    src={book.volumeInfo.imageLinks?.thumbnail || 
                                         'https://via.placeholder.com/300x450?text=No+Image'}
                                    alt={book.volumeInfo.title || 'Book cover'}
                                    className="w-full max-w-md h-auto rounded-lg shadow-xl"
                                    style={{ maxHeight: '500px', objectFit: 'contain' }}
                                />
                            </div>
                            <button 
                                onClick={nextBook}
                                className="absolute right-0 md:right-[-60px] top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition"
                                aria-label="Next book"
                            >
                                <FiChevronRight className="w-6 h-6 text-secondaryColor" />
                            </button>
                            
                        </div>
                    )
                )}
            </div>
            <div className="max-w-9xl mx-auto max-sm:w-[500px] sm:px-6 lg:px-8 py-12 px-10 md:px-[85px] ">

                <div className="text-center mb-16 w-full my-16">
                    <div className="flex flex-wrap justify-center items-center md:gap-[150px] my-8 py-10 px-[65px] bg-[#F5EAD6]">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Gray_book.png" alt=""  className='w-[80px] h-[80px]'/>
                         <img src="https://icon-library.com/images/book-icon-transparent/book-icon-transparent-11.jpg" alt="" className='w-[80px] h-[80px]'/>
                         <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Book-grey.png" alt="" className='w-[80px] h-[100px]'/>
                         <img src="https://www.pngplay.com/wp-content/uploads/12/Book-Clip-Art-Transparent-Images.png" alt="" className='w-[80px] h-[80px]'/>
                         <img src="https://thumbs.wbm.im/pw/small/6be236154238bbbbf9edf9507db23e51.png" alt="" className='w-[80px] h-[80px]'/>
                    </div>
                </div>

                {/* Second Section - Featured Books */}
                <div className="mt-20 px-[60px] md:px-[85px]">
                    <p className="text-sm font-light text-gray-500 mb-1 py-4">SOME QUALITY ITEMS</p>
                    <h2 className="text-3xl font-light text-gray-800 mb-12 text-center font-serif">Featured Books</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {books.slice(0,5).map((book) => (
                        <div key={book.id} className="bg-[#F5EAD6] rounded-md shadow-lg overflow-hidden w-[200px] h-[350px] mx-auto">
                        <div className="p-6 font-serif ">
                            <img src={book.volumeInfo.imageLinks?.thumbnail} alt="book.volumeInfo.title" className='w-[150px] h-[200px] mx-auto object-cover p-2 bg-gray-50' />
                            <h3 className="text-md font-semibold text-gray-600 mb-1">{book.volumeInfo.title.length > 10 ? `${book.volumeInfo.title.slice(0,15)}...` : book.volumeInfo.title}</h3>
                            <p className="text-gray-600 mb-2">{book.volumeInfo.authors.length > 5 ? `${book.volumeInfo.authors?.join(', ').slice(0,2)}` : book.volumeInfo.authors}</p>  
                            {/* <button className='text-gray-600 my-1 text-1xl py-2 px-2  border-0 rounded-2xl bg-cream mx-auto flex justify-center'>More Details</button>                       */}
                            </div>
                        </div>
                    ))}
                        </div>
                    <Link to="/browse" className='bg-cream text-gray-700 flex items-end mt-5 md:mt-10 max-md:items-center md:ml-[500px] lg:ml-[900px] font-light'>See More books →</Link>
                    </div>
                </div>
                </div>
    );
};

export default Home;