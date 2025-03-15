import React from "react";

const CheckOut = () => {
  return (
    <div className="p-6 w-full">
      <h3 className="text-lg font-bold uppercase mb-4">Checkout</h3>
      <Input label="Cardholder's Name" type="text" name="name" />
      <Input
        label="Card Number"
        type="number"
        name="card_number"
        imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png"
      />
      <div className="flex gap-4 mt-2">
        <Input label="Expiration Date" type="month" name="exp_date" />
        <Input label="CVV" type="number" name="cvv" />
      </div>
      <Button text="Place Order" />
    </div>
  );
};

const Input = ({ label, type, name, imgSrc }) => (
  <div className="mb-4">
    <label className="block text-sm font-bold mb-2 text-gray-300">
      {label}
    </label>
    <div className="flex items-center border border-gray-500 rounded-md px-2 py-1">
      <input
        type={type}
        name={name}
        className="w-full bg-transparent p-2 text-white text-sm focus:outline-none"
      />
      {imgSrc && <img src={imgSrc} alt="icon" className="w-6 h-6 ml-2" />}
    </div>
  </div>
);

const Button = ({ text }) => (
  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold uppercase text-sm py-2 mt-4 rounded shadow-md">
    {text}
  </button>
);

export default CheckOut;
