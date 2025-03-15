import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">Oops!</h1>
      <p className="text-xl mt-4">Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-500 mt-2">
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">
        Go to Home
      </a>
    </div>
  );
};

export default ErrorPage;
