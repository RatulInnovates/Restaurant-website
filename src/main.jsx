import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import User from "./Pages/User";
import ErrorPage from "./Pages/ErrorPage";
import { CartProvider } from "./Context/CartContext"; // Corrected import

// Define the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/menu",
    element: <Menu />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user",
    element: <User />,
    errorElement: <ErrorPage />,
  },
]);

// Get the root element
const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
