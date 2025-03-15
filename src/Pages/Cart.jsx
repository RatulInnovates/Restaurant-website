import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import CheckOut from "../Components/CheckOut";
import Footer from "../Components/Footer";

function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();
  const [balance, setBalance] = useState(1000); // Initial balance
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleSubmitOrder = () => {
    if (totalAmount > balance) {
      alert("Insufficient balance");
      return;
    }
    setBalance(balance - totalAmount);
    clearCart(); // Clear the cart after submitting the order
    alert("Order submitted successfully");
  };

  const handleGoBack = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <div className="bg-gray-200 p-2 rounded">
          <h2 className="text-lg font-semibold">
            Balance: ${balance.toFixed(2)}
          </h2>
        </div>
      </div>
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
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <img
            src="/images/empty_cart.jpg"
            alt="Empty Cart"
            className="w-[50%] h-[50%] object-contain"
          />
          <p className="text-lg font-semibold mt-4">
            Your cart is currently empty.
          </p>
          <a
            href="/menu"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Go to Menu
          </a>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row">
          <ul className="flex-1">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-2 border-b"
              >
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p>${item.price}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => removeFromCart(item)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex-1 bg-gray-800 text-white p-4 mt-4 md:mt-0 md:ml-4">
            <h2 className="text-xl font-bold">
              Total Amount: ${totalAmount.toFixed(2)}
            </h2>
            <button
              onClick={handleSubmitOrder}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors mt-4"
            >
              Submit Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
