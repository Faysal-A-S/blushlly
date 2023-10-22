import React from "react";
import {
  faChevronLeft,
  faChevronRight,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import slider from "../Images/slider.png";
const Slider = () => {
  return (
    <div className="mt-2 h-[600px] w-full ">
      <div
        style={{
          backgroundImage: `url(${slider})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
        }}
        className="h-full    "
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          style={{ color: "#ffffff" }}
          className="absolute top-[50%] cursor-pointer left-[0%]"
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          style={{ color: "#ffffff" }}
          className="absolute top-[50%]  cursor-pointer right-[0%]"
        />
        <div className="slider-box top-[50%]  left-[50%]  -translate-y-1/2 p-10 leading-loose">
          <p className=" underline-offset-4 underline decoration-slate-50  text-slate-50">
            SKIN
          </p>
          <h1 className="text-white text-3xl">
            Six Hyaluronic Serums For Glowing Summer Skin Vivamus Placerat
          </h1>
          <p
            style={{
              color: "#e1dfdf",
            }}
          >
            By Sarfraz Jasim 29 July, 2023
          </p>
          <span className=" text-slate-50 border-b-2 border-slate-50 pb-1 cursor-pointer">
            Continue Reading <FontAwesomeIcon icon={faArrowRightLong} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
