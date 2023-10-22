import React from "react";

import logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
import pops1 from "../Images/pops1.png";
import pops2 from "../Images/pops2.png";
import pops3 from "../Images/pops3.png";
import gal1 from "../Images/gal1.png";
import gal2 from "../Images/gal2.png";
import gal3 from "../Images/gal3.png";
import gal4 from "../Images/gal4.png";
import gal5 from "../Images/gal5.png";
import gal6 from "../Images/gal6.png";
import {
  LuFacebook,
  LuLinkedin,
  LuTwitter,
  LuInstagram,
  LuSearch,
} from "react-icons/lu";
import { TbBrandThreads } from "react-icons/tb";
import { PiPinterestLogo } from "react-icons/pi";
const Footer = () => {
  const categories = [
    {
      text: "Beauty",
      number: 4,
    },
    {
      text: "Fashion",
      number: 8,
    },
    {
      text: "Makeup",
      number: 6,
    },
    {
      text: "Body",
      number: 2,
    },
    {
      text: "Lifestyle",
      number: 7,
    },
  ];
  const popular = [
    {
      url: pops1,
      text: "Vivamus placerat Luctus Neque nec Faucibus",
      days: "7 Days ago",
    },
    {
      url: pops2,
      text: "Vivamus placerat Luctus Neque nec Faucibus",
      days: "4 Days ago",
    },
    {
      url: pops3,
      text: "Vivamus placerat Luctus Neque nec Faucibus",
      days: "14 Days ago",
    },
  ];
  const gallery = [
    {
      url: gal1,
    },
    {
      url: gal2,
    },
    {
      url: gal3,
    },
    {
      url: gal4,
    },
    {
      url: gal5,
    },
    {
      url: gal6,
    },
  ];
  const tags = [
    "Beauty",
    "Skin",
    "Makeup",
    "Hair",
    "Tips",
    "Fashion",
    "Eye",
    "Skin",
  ];
  return (
    <div className="bg-[#1D1A1A] w-full h-[890px]">
      <div className="mx-40 py-20">
        <div className="grid grid-cols-3 text-white font-['Vidaloka'] text-[16px] gap-x-48">
          <div>
            <h1>CATEGORIES</h1>
            <div className="mt-10">
              {categories.map((item) => {
                return (
                  <div className="grid grid-cols-1 border-b ">
                    <div className="py-4 flex flex-row justify-between">
                      <h1 className="">{item.text}</h1>
                      <h1>({item.number})</h1>
                    </div>
                  </div>
                );
              })}
              <div className="flex mt-5 items-center  ">
                <input
                  type="text "
                  className="w-full h-[52px] bg-[#535353] px-5 footerSearch "
                  style={{ color: "white" }}
                  placeholder="Search"
                />
              </div>
              <LuSearch
                className="translate-x-[22rem] -translate-y-9"
                size={24}
              />
            </div>
          </div>
          <div>
            <h1>POPULAR POST</h1>
            <div className="mt-10">
              {popular.map((item) => {
                return (
                  <div className="grid grid-cols-3 gap-6 mb-7">
                    <div>
                      <img src={item.url} alt="" className="h-[100px]" />
                    </div>
                    <div className="col-span-2">
                      <h1>{item.text}</h1>
                      <p className="text-[12px] font-['Montserrat'] text-[#CFCFCF] mt-2 font-[400]">
                        {item.days}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1>GALLERY</h1>
            <div className="mt-10">
              <div className="grid grid-cols-3 gap-3 gap-x-2 ">
                {gallery.map((item) => {
                  return (
                    <img
                      src={item.url}
                      alt=""
                      className="h-[100px] w-[125px]"
                    />
                  );
                })}
              </div>
            </div>
            <div className="mt-5">
              <h1>TAGS</h1>
              <div className="grid grid-cols-4 gap-2 mt-5">
                {tags.map((item) => {
                  return (
                    <button className="bg-[#535353] rounded-[16px] font-['Montserrat'] text-[12px] text-[#CFCFCF]  py-1.5 ">
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-y py-10 flex justify-between ">
          <img src={logo} alt="" className="w-[190px] h-[70px]" />

          <ul className="flex gap-10 text-[20px] text-white font-['Montserrat'] items-center">
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
        <div className="mt-16 flex flex-row justify-between  items-center ">
          <div className="flex   items-center">
            <Link to="/" className="mx-2 iconsFooter ">
              <LuFacebook size={20} />
            </Link>
            <Link to="/" className="mx-2 iconsFooter ">
              <LuInstagram size={20} />
            </Link>
            <Link to="/" className="mx-2 iconsFooter ">
              <TbBrandThreads size={20} />
            </Link>
            <Link to="/" className="mx-2 iconsFooter ">
              <LuTwitter size={20} />
            </Link>
            <Link to="/" className="mx-2 iconsFooter">
              <PiPinterestLogo size={20} />
            </Link>
            <Link to="/" className="mx-2 iconsFooter ">
              <LuLinkedin size={20} />
            </Link>
          </div>
          <div className="text-white font-['Montserrat'] text-[20px]">
            <h1>© 2023 PostX. Designed By WPXPO</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
