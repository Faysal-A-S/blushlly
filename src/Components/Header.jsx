import React from "react";

import { Link } from "react-router-dom";
import { LuFacebook, LuLinkedin, LuTwitter, LuInstagram } from "react-icons/lu";
import { TbBrandThreads } from "react-icons/tb";
import { PiPinterestLogo } from "react-icons/pi";

const Header = () => {
  return (
    <div className="mx-40 my-10">
      <div className="mb-4 flex justify-between items-center">
        <h3 className="text-gray-500 text-[2-px] ">Welcome there! </h3>
        <div>
          <div className="flex  mb-2 items-center">
            <Link to="/" className="mx-2 icons mt-2">
              <LuFacebook size={20} />
            </Link>
            <Link to="/" className="mx-2 icons mt-2 ">
              <LuInstagram size={20} />
            </Link>
            <Link to="/" className="mx-2 icons mt-2">
              <TbBrandThreads size={20} />
            </Link>
            <Link to="/" className="mx-2 icons mt-2">
              <LuTwitter size={20} />
            </Link>
            <Link to="/" className="mx-2 icons mt-2">
              <PiPinterestLogo size={20} />
            </Link>
            <Link to="/" className="mx-2 icons mt-2">
              <LuLinkedin size={20} />
            </Link>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <span
              style={{ borderLeft: "2px solid #C0C0C0" }}
              className="h-[48px]"
            >
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <button className="subscribe">Subscribe</button>
          </div>
        </div>
      </div>
      <hr style={{ borderTop: "2px solid 	#C0C0C0" }} />
    </div>
  );
};

export default Header;
