import React from "react";
import logo from "../images/logo.png";
const Header = () => {
  return (
    <div className="absolute px-8 m-0 z-10 ">
      <img className="w-56" src={logo} alt="something went wrong" />
    </div>
  );
};

export default Header;
