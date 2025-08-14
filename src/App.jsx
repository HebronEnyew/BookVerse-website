import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext";
import AuthModal from "./components/AuthModal";

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookCard from './components/BookCard';
import BookDetails from './pages/BookDetails';
import BrowseBooks from './pages/BrowseBooks';
import Header from './components/Header';
import Favorites from './pages/Favorites';
import Footer from './components/Footer';

import { ToastContainer } from "react-toastify"

export default function App() {
  

  return (
    <AuthProvider>
      <Header />
      <div className="font-sans text-gray-700 bg-amber-50 min-h-screen">
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/browse" element={<BrowseBooks  />} />
          <Route path="/bookcard" element={<BookCard  />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <ToastContainer />
      </div>
      <Footer />
      <AuthModal />
    </AuthProvider>
  );
}