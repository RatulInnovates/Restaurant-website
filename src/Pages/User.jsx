import React, { useState } from "react";
import AuthForm from "../Components/AuthForm";

const User = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return <AuthForm isSignUp={isSignUp} toggleForm={toggleForm} />;
};

export default User;
