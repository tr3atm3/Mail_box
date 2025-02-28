import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex bg-blue-400 py-2 items-center">
      <div className="flex w-1/3 justify-around items-center">
        <div className="">
          <h1 className="text-2xl">MyWebLink</h1>
        </div>
        <ul className="flex gap-4 items-center">
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>Products</li>
          <li>About Us</li>
          <Link to="/inbox">
            <li>Inbox</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
