import React from "react";
import Navbar from "./Navbar";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gray-100 text-gray-900 py-12 px-6 md:px-20 mt-7">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            About Dhaka Delights
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Welcome to Dhaka Delights, where we bring you the rich and authentic
            flavors of Bangladeshi cuisine. From our signature biryanis to our
            mouth-watering kebabs, we take pride in serving you the best food in
            town.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 mt-10">
          <img
            src="/images/interior.jpg"
            alt="Dhaka Delights Interior"
            className="rounded-lg shadow-lg w-full"
          />
          <div>
            <h2 className="text-3xl font-semibold text-red-600 mb-3">
              Our Story
            </h2>
            <p className="text-lg leading-relaxed">
              Established in the heart of Dhaka, our journey began with a
              passion for good food and warm hospitality. We believe in using
              only the freshest ingredients to create dishes that capture the
              true essence of Bangladeshi flavors.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 mt-10">
          <img
            src="/images/chef.jpg"
            alt="Dhaka Delights Chef"
            className="rounded-lg shadow-lg w-full"
          />
          <img
            src="/images/dish.jpg"
            alt="Dhaka Delights Special Dish"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        <div className="max-w-5xl mx-auto mt-10">
          <h2 className="text-3xl font-semibold text-red-600 mb-3 text-center">
            Our Specialties
          </h2>
          <p className="text-lg text-center leading-relaxed">
            Whether you're craving a traditional kacchi biryani, flavorful beef
            rezala, or a delicious selection of sweets, Dhaka Delights is here
            to satisfy your taste buds.
          </p>
        </div>

        {/* Additional Info Section */}
        <div className="max-w-5xl mx-auto mt-12 text-center">
          <h2 className="text-3xl font-semibold text-red-600 mb-3">
            Why Choose Us?
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            At Dhaka Delights, we are committed to providing an exceptional
            dining experience. Our chefs use the finest ingredients, our staff
            offers warm hospitality, and our ambiance creates the perfect
            setting for a memorable meal.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-red-600">
                Quality Ingredients
              </h3>
              <p className="text-lg">
                We use the freshest and highest-quality ingredients to ensure
                every dish is packed with flavor.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-red-600">
                Authentic Flavors
              </h3>
              <p className="text-lg">
                Experience the true taste of Bangladesh with our traditional
                recipes passed down through generations.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-red-600">
                Warm Hospitality
              </h3>
              <p className="text-lg">
                Our friendly staff is dedicated to making you feel at home from
                the moment you step in.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
