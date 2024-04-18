import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute bg-gradient-to-b from-black">
        <img
          className=" w-screen h-screen"
          src="https://www.komando.com/wp-content/uploads/2020/01/saving-money-on-streaming-services.jpg"
          alt="something went wrong"
        />
      </div>

      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-65">
        <h1 className="font-bold text-3xl py-4 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            text="text"
            placeholder="Full name"
            className="p-2 my-4 w-full bg-gray-500"
          />
        )}
        <input
          text="text"
          placeholder="Enter your email"
          className="p-2 my-4 w-full bg-gray-500"
        />
        <input
          text="password"
          placeholder="Enter password"
          className="p-2 my-4 w-full  bg-gray-500"
        />
        <button className="p-4 my-6 bg-red-500 text-white w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="text-white py-4">
          {isSignInForm
            ? "New to Netflix ? Sign Up now."
            : "Already registered ? Sign In..."}
        </p>
      </form>
    </div>
  );
};

export default Login;
