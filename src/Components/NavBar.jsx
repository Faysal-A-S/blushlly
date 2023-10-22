import React from "react";
import { Link } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import logoblack from "../Images/logoBlack.png";
const NavBar = () => {
  return (
    <div className="mx-40 ">
      <div className="flex justify-between mb-5">
        <img src={logoblack} alt="" className="w-[190px] h-[70px]" />

        <div className="grow mt-3">
          <ul className="flex gap-6 justify-center mt-5  navbar text-[20px]">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Categories</Link>
            </li>
            <li>
              <Link>Makeup</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="mt-5 ml-9 flex navbar text-[16px] items-center">
          <input
            type="search"
            name="Search"
            placeholder="Search"
            className="navSearch"
            style={{
              width: "100px",

              textAlign: "center",
              fontFamily: "Montserrat",
            }}
          />
          <button>
            <LuSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
