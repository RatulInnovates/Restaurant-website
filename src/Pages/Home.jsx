import React from "react";
import Footer from "../Components/Footer";
import Navbar from "./Navbar";

function Home() {
  // Random dish data
  const featuredDishes = [
    {
      id: 1,
      name: "Grilled Salmon",
      description: "Freshly grilled salmon served with a side of vegetables.",
      image: "/images/food_burger.jpg",
    },
    {
      id: 2,
      name: "Beef Steak",
      description:
        "Juicy beef steak cooked to perfection, served with mashed potatoes.",
      image: "/images/food_pizza.jpg",
    },
    {
      id: 3,
      name: "Vegetable Pasta",
      description:
        "A healthy mix of fresh vegetables and pasta in a creamy sauce.",
      image: "/images/food_tacos.jpg",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      review:
        "Amazing food and excellent service! The Grilled Salmon is a must-try.",
      image: "/images/user1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      review:
        "The Beef Steak was cooked to perfection. Highly recommend this place!",
      image: "/images/user2.jpg",
    },
    {
      id: 3,
      name: "Alice Johnson",
      review:
        "Vegetable Pasta was delicious. The ambiance is warm and welcoming.",
      image: "/images/user3.jpg",
    },
  ];

  // Special offers data
  const specialOffers = [
    {
      id: 1,
      title: "Weekend Special",
      description: "Get 20% off on all orders above $50 this weekend!",
      image: "/images/offer1.jpg",
    },
    {
      id: 2,
      title: "Family Combo",
      description:
        "Enjoy a family combo meal for just $30. Limited time offer!",
      image: "/images/offer2.jpg",
    },
    {
      id: 3,
      title: "Happy Hour",
      description: "50% off on selected drinks from 4 PM to 7 PM.",
      image: "/images/offer3.jpg",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-[80vh]"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4 stroke-black stroke-2">
            Welcome to Our Restaurant
          </h1>
          <p className="text-xl mb-8">
            Experience the best dining experience with us.
          </p>
          <a
            href="/menu"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            View Menu
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-lg text-center mb-4">
            Our restaurant offers a unique dining experience with a variety of
            delicious dishes made from the freshest ingredients.
          </p>
          <p className="text-lg text-center">
            We are committed to providing excellent service and a warm,
            welcoming atmosphere for all our guests.
          </p>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Dishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
                  <p className="text-gray-700">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                </div>
                <p className="text-gray-700">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Special Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialOffers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-gray-700">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <img
                key={item}
                src={`/images/gallery${item}.jpg`}
                alt={`Gallery Image ${item}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Visit us at our location or give us a call to make a
                reservation.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Address:</strong> 123 Main Street, City, Country
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Phone:</strong> +1 234 567 890
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Email:</strong> info@restaurant.com
              </p>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.95373531531615!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2aabc5e2c1a!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1633039291417!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Add Footer component */}
      <Footer />
    </div>
  );
}

export default Home;
