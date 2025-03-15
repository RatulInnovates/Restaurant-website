import React from "react";
import Navbar from "./Navbar";
import FoodCard from "../Components/FoodCard";
import Footer from "../Components/Footer";

function Menu() {
  const foodItems = [
    {
      id: 1,
      image: "/images/food_pizza.jpg",
      discount: "10%",
      name: "Pizza",
      price: "10.00",
      originalPrice: "12.00",
      rating: 4,
    },
    {
      id: 2,
      image: "/images/food_burger.jpg",
      discount: "15%",
      name: "Burger",
      price: "8.00",
      originalPrice: "9.50",
      rating: 5,
    },
    {
      id: 3,
      image: "/images/food_pasta.jpg",
      discount: "20%",
      name: "Pasta",
      price: "12.00",
      originalPrice: "15.00",
      rating: 3,
    },
    {
      id: 4,
      image: "/images/food_sushi.jpg",
      discount: "5%",
      name: "Sushi",
      price: "20.00",
      originalPrice: "21.00",
      rating: 4,
    },
    {
      id: 5,
      image: "/images/food_salad.jpg",
      discount: "10%",
      name: "Salad",
      price: "7.00",
      originalPrice: "8.00",
      rating: 4,
    },
    {
      id: 6,
      image: "/images/food_steak.jpg",
      discount: "15%",
      name: "Steak",
      price: "25.00",
      originalPrice: "30.00",
      rating: 5,
    },
    {
      id: 7,
      image: "/images/food_tacos.jpg",
      discount: "20%",
      name: "Tacos",
      price: "9.00",
      originalPrice: "11.00",
      rating: 4,
    },
    {
      id: 8,
      image: "/images/food_icecream.jpg",
      discount: "10%",
      name: "Ice Cream",
      price: "5.00",
      originalPrice: "6.00",
      rating: 5,
    },
    {
      id: 9,
      image: "/images/food_pancakes.jpg",
      discount: "15%",
      name: "Pancakes",
      price: "8.00",
      originalPrice: "9.50",
      rating: 4,
    },
    {
      id: 10,
      image: "/images/food_soup.jpg",
      discount: "5%",
      name: "Soup",
      price: "4.00",
      originalPrice: "5.00",
      rating: 3,
    },
    {
      id: 11,
      image: "/images/food_pizza.jpg", // Duplicate image
      discount: "10%",
      name: "Pizza Special",
      price: "11.00",
      originalPrice: "13.00",
      rating: 4,
    },
    {
      id: 12,
      image: "/images/food_burger.jpg", // Duplicate image
      discount: "15%",
      name: "Cheese Burger",
      price: "9.00",
      originalPrice: "10.50",
      rating: 5,
    },
    {
      id: 13,
      image: "/images/food_pasta.jpg", // Duplicate image
      discount: "20%",
      name: "Spaghetti",
      price: "13.00",
      originalPrice: "16.00",
      rating: 4,
    },
    {
      id: 14,
      image: "/images/food_sushi.jpg", // Duplicate image
      discount: "5%",
      name: "Sushi Deluxe",
      price: "22.00",
      originalPrice: "25.00",
      rating: 5,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="menu flex flex-wrap justify-center gap-4 pt-6">
        {foodItems.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
