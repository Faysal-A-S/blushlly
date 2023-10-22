import React from "react";
import quote from "../Images/quote.png";
import ad2 from "../Images/Ad 2.png";
import { LuFacebook, LuLinkedin, LuTwitter, LuInstagram } from "react-icons/lu";
import { TbBrandThreads } from "react-icons/tb";
import { PiPinterestLogo } from "react-icons/pi";
const Quote = () => {
  return (
    <div className="mt-32">
      <div
        className="box-border h-72 w-full  flex items-center justify-center p-48 "
        style={{ backgroundColor: "#DDDDDD" }}
      >
        <div className="grid grid-cols-2 gap-8 mr-52 place-items-end items-center justify-center">
          <div>
            <img
              src={quote}
              alt=""
              style={{ height: "190px", width: "190px" }}
            />
          </div>
          <div>
            <h1
              style={{ fontFamily: "Vidaloka" }}
              className="font-semibold text-[36px]"
            >
              Morbi Porttitor
            </h1>
            <p
              className="text-[16px] leading-6"
              style={{ fontFamily: "Montserrat", color: "#1D1A1A" }}
            >
              Onvallis porttitor ligula leo a lectus. Donec id venenatis magna.
              Vivamus placerat luctus neque nec faucibus. Aliquam{" "}
              <span className="font-semibold">GRAVIDA</span> eu{" "}
              <span className="font-semibold">TORTOR</span> vitae tempor. .
              Mauris <span className="font-semibold">CONDIMENTUM</span>{" "}
              scelerisque ante nec ultricies. Vivamus tincidunt nibh velit!
            </p>
            <div
              className="flex justify-between mt-3"
              style={{ fontFamily: "Montserrat" }}
            >
              <div className="flex flex-row gap-4">
                <LuFacebook size={20} />
                <LuInstagram size={20} />
                <TbBrandThreads size={20} />
                <LuTwitter size={20} />
                <PiPinterestLogo size={20} />
                <LuLinkedin size={20} />
              </div>
              <span>(85 posts)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-40">
        <div className="mt-16 mb-10">
          <img src={ad2} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Quote;
