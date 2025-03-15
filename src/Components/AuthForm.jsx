import React, { useState } from "react";
import { useNavigate } from "react-router";

const AuthForm = ({ isSignUp, toggleForm }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/"); // Navigate to the home page
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    alert("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <button
          onClick={handleGoBack}
          className="text-sm text-gray-600 hover:text-gray-800 mb-4 inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Go Back to Home
        </button>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="Enter username"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-2 flex items-center text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "🙈"}
              </button>
            </div>
          </div>
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="Confirm password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-2 flex items-center text-gray-600"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "👁️" : "🙈"}
                </button>
              </div>
            </div>
          )}
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            {!isSignUp && (
              <a
                href="#"
                className="text-sm text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            )}
          </div>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-600">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <button
            onClick={toggleForm}
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
