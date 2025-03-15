import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaLinkedin, FaPhone, FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white py-10 px-5 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Address Section */}
        <div>
          <h3 className="font-bold text-lg">ADDRESS</h3>
          <p className="text-gray-300">
            House- 146/G (Old), 59 (New)
            <br />
            Green Akshay Plaza (1st Floor)
            <br />
            Satmasjid Road, Dhanmondi
            <br />
            Phone: <span className="text-yellow-400 font-semibold">01775-003218</span>
          </p>
          <h4 className="font-semibold mt-4">Corporate Branch</h4>
          <p className="text-gray-300">
            House- 41 Road- 52
            <br />
            Samsuddin Mansion (1st Floor)
            <br />
            Gulshan 2 Circle
            <br />
            Corporate Number: <span className="text-yellow-400 font-semibold">01329-723479</span>
          </p>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="font-bold text-lg">BRANCH OPENING HOURS</h3>
          <p className="text-gray-300">Everyday: <span className="font-semibold">03:00 pm – 10:00pm</span></p>

          <h3 className="font-bold text-lg mt-4">ONLINE OPENING HOURS</h3>
          <p className="text-gray-300">Everyday: <span className="font-semibold">03:00 pm – 10:00pm</span></p>

          <h3 className="font-bold text-lg mt-4">BOOK A TABLE</h3>
          <p className="text-yellow-400 font-semibold">Best Food in Town</p>
          <p className="text-gray-300">For any complaint or assistance</p>
          <p className="text-yellow-400 font-semibold">info@DhakaDelights.com</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-lg">NEWSLETTER</h3>
          <p className="text-gray-300">Subscribe to the newsletter for the latest updates</p>
          <div className="flex mt-3">
            <input
              type="email"
              placeholder="Your Email..."
              className="p-2 w-full bg-gray-800 text-white rounded-l-md outline-none"
            />
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-r-md font-semibold">SUBSCRIBE</button>
          </div>
        </div>

        {/* Hotline & Social Media */}
        <div>
          <h3 className="font-bold text-lg">HOTLINE</h3>
          <div className="flex items-center text-yellow-400 text-lg font-semibold">
            <FaPhone className="mr-2" /> 09614-446688
          </div>

          <div className="flex space-x-4 mt-5">
            <FaFacebook className="text-white text-2xl cursor-pointer" />
            <FaInstagram className="text-white text-2xl cursor-pointer" />
            <FaTiktok className="text-white text-2xl cursor-pointer" />
            <FaYoutube className="text-white text-2xl cursor-pointer" />
            <FaLinkedin className="text-white text-2xl cursor-pointer" />
          </div>

          {/* App Download */}
          <div className="flex space-x-3 mt-5">
            <img src="/images/google-play.png" alt="Google Play" className="w-7 cursor-pointer bg-black" />
            <img src="/images/app-store.png" alt="App Store" className="w-7 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-colors"
          aria-label="Back to Top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;