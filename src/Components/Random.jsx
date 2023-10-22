import React from "react";
import random1 from "../Images/random1.png";
import random2 from "../Images/random2.png";
import random3 from "../Images/random3.png";
import random4 from "../Images/random4.png";
import random5 from "../Images/random5.png";
import random6 from "../Images/random6.png";
const Random = () => {
  const images = [
    {
      url: random1,
      category: "MAKEUP",
      title: "Vivamus placerat Luctus Neque nec Faucibus",
      nameAndDate: "By Sarfraz Jasim - 29 July, 2023",
      position: "left",
      text: "Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..",
    },
    {
      url: random2,
      category: "SPA",
      title: "Vivamus placerat Luctus Neque nec Faucibus",
      nameAndDate: "By Sarfraz Jasim - 29 July, 2023",
      position: "right",
      text: "Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..",
    },
    {
      url: random3,
      category: "MAKEUP",
      title: "Vivamus placerat Luctus Neque nec Faucibus",
      nameAndDate: "By Sarfraz Jasim - 29 July, 2023",
      position: "left",
      text: "Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..",
    },
    {
      url: random4,
      category: "MAKEUP",
      title: "Vivamus placerat Luctus Neque nec Faucibus",
      nameAndDate: "By Sarfraz Jasim - 29 July, 2023",
      position: "right",
      text: "Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..",
    },
    {
      url: random5,
      category: "TIPS",
      title: "Vivamus placerat Luctus Neque nec Faucibus",
      nameAndDate: "By Sarfraz Jasim - 29 July, 2023",
      position: "left",
      text: "Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..",
    },
    {
      url: random6,
      category: "MAKEUP",
      title:
        "Sed dignissim quam nulla, at sodales elit venenatis at. In in  fringilla",
      text: "Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..",
      nameAndDate: "By Sarfraz Jasim - 29 July, 2023",
      position: "right",
    },
  ];
  return (
    <div className="mx-40">
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t-2 border-black"></div>
        <span className="flex-shrink mx-4 title-text">Random Post</span>
        <div className="flex-grow border-t-2 border-black"></div>
      </div>
      <div>
        {images.map((image) => {
          return (
            <div className="grid grid-cols-2 gap-5 mb-8 py-10 border-b border-dashed border-[#1D1A1A]">
              <div
                className={`box-border h-[480px] w-full p-4  flex items-center justify-center  relative ${
                  image.position === "left" ? "" : "col-start-2"
                }`}
                style={{ backgroundImage: `url(${image.url})` }}
              >
                <div
                  className={`h-[360px] box-border  relative inline-block -right-[80%] pr-48 pl-12 py-6 items-center text-start ${
                    image.position === "left" ? "random-left" : "random-right"
                  }`}
                >
                  <span
                    className=" border-b-2  pb-1  text-gray-500 text-[14px] "
                    style={{
                      fontFamily: "Montserrat",
                      borderColor: "rgb(113, 113, 122)",
                    }}
                  >
                    {image.category}
                  </span>
                  <h1
                    className="text-[32px] font-bold mt-2"
                    style={{ fontFamily: "Vidaloka" }}
                  >
                    {image.title}
                  </h1>
                  <h1
                    className="text-[18px]"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    {image.text}
                  </h1>
                  <div className="mt-5">
                    <span
                      style={{ fontFamily: "Montserrat", color: "#838383" }}
                      className="text-[14px] "
                    >
                      By Sarfraz Jasim - 29 July, 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center">
        {" "}
        <button className="subscribe mb-5">Load More</button>
      </div>
    </div>
  );
};

export default Random;
