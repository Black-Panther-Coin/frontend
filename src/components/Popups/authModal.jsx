import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuthentication } from '../utils/provider';
import httpClient from '../httpClient/httpClient';

const AuthModal = ({ isOpen, toggleModal }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    walletAddress: '',
  });
  const { currentUser, setIsAuthenticated, onLogout, getCurrentUser } = useAuthentication();

  const handleFormSwitch = () => setIsLogin(!isLogin);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (isLogin) {
        response = await httpClient.post("user/signin", formData);
        if (response.status === 200) {
          localStorage.setItem("token_key_Bpnthr", response.data.token);
          localStorage.setItem("expiresIn", response.data.expiresIn);
          toast.success('Login successful! Redirecting to homepage...');
          setIsAuthenticated(true);
          getCurrentUser()
          toggleModal(); // Close modal on successful login
        }
      } else {
        response = await httpClient.post("user/signup", formData)
        if (response.status === 201) {
          toast.success('Signup successful! Please login to continue.');
          setIsLogin(true); // Switch to login form
        }
      }
    } catch (error) {
      console.error('Authentication error:', error);
      if (error.response) {
        toast.error(error.response.data.message || 'Authentication error');
      } else if (error.request) {
        toast.error('Request error');
      } else {
        toast.error('General error');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-lightbaige p-8 rounded-lg shadow-lg relative w-full max-w-md">
        <button
          onClick={toggleModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <FaTimes className="h-6 w-6" />
        </button>
        {!currentUser ? (<>
          <h2 className="text-2xl font-bold mb-4 text-center text-purple-950">
            {isLogin ? 'Login' : 'Register'}
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-2 text-black bg-[#FFFAE1] p-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-2 text-black bg-[#FFFAE1] p-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {!isLogin && (
            <div>
              <label htmlFor="walletAddress" className="block text-sm font-medium leading-6 text-gray-900">
                Wallet Address To Receive Tokens
              </label>
              <div className="mt-2">
                <input
                  id="walletAddress"
                  name="walletAddress"
                  type="text"
                  autoComplete="walletAddress"
                  required
                  value={formData.walletAddress}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-2 text-black bg-[#FFFAE1] p-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          )}
          <div>
            <button
              type="submit"
              className="flex justify-center w-full rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={handleFormSwitch}
            className="font-semibold text-yellow-500 hover:text-yellow-600 focus:outline-none"
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
        </>) : (<>
          <h2 className="text-2xl font-bold mb-4 text-center text-purple-950">
            Log Out
          </h2>
          <button
            onClick={onLogout}
            className="flex justify-center w-full rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Log Out
          </button>
        </>)}
      </div>
    </div>
  );
};

AuthModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default AuthModal;