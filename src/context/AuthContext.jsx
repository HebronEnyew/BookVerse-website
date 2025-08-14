import React, { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../pages/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //modal slice
  const [authModal, setAuthModal] = useState({ open: false, mode: "signin" }); // 'signin' | 'register'

  const openAuthModal = (mode = "signin") => setAuthModal({ open: true, mode });
  const closeAuthModal = () => setAuthModal((m) => ({ ...m, open: false }));

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  //auto-close modal after login/register succeeds
  useEffect(() => {
    if (user && authModal.open) closeAuthModal();
  }, [user, authModal.open]); // eslint-disable-line

  const value = {
    user,
    loading,
    authModal,
    openAuthModal,
    closeAuthModal,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
