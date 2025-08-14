import React from "react";
import Modal from "./Modal";
import { useAuth } from "../context/AuthContext";
import SignIn from "../pages/Login";
import Register from "../pages/Register";

const AuthModal = () => {
  const { authModal, closeAuthModal, openAuthModal } = useAuth();

  if (!authModal.open) return null;

  return (
    <Modal isOpen={authModal.open} onClose={closeAuthModal}>
      {authModal.mode === "signin" ? (
        <>
          <h2 className="text-xl font-bold mb-4">Sign in to continue</h2>
          <SignIn />
          <p className="mt-4 text-sm text-gray-600">
            Don’t have an account?{" "}
            <button
              onClick={() => openAuthModal("register")}
              className="text-amber-700 hover:underline"
            >
              Create one
            </button>
          </p>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4">Create your account</h2>
          <Register />
          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => openAuthModal("signin")}
              className="text-amber-700 hover:underline"
            >
              Sign in
            </button>
          </p>
        </>
      )}
    </Modal>
  );
};

export default AuthModal;
