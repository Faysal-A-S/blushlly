import React from "react";
import ad1 from "../Images/Ad 1.png";
import latest1 from "../Images/latest1.png";
import latest2 from "../Images/latest2.png";
import latest3 from "../Images/latest3.png";
import latest4 from "../Images/latest4.png";
const Popular = () => {
  const images = [
    {
      url: latest1,
      category: "HAIR",
      title: "Vivamus placerat Luctus Neque nec Faucibus",
      nameAndDate: "By Sarfraz Jasim - 29 July, 2023",
    },
    {
      url: latest2,
      category: "HAIR",
      title: "Vivamus placerat Luctus Neque nec Faucibus",
      nameAndDate: "By Sarfraz Jasim - 29 July, 2023",
    },
    {
      url: latest3,
      category: "HAIR",
      title: "Vivamus placerat Luctus Neque nec Faucibus",
      nameAndDate: "By Sarfraz Jasim - 29 July, 2023",
    },
  ];

  return (
    <div className="mx-40">
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t-2 border-black"></div>
        <span className="flex-shrink mx-4 title-text">Latest Post</span>
        <div className="flex-grow border-t-2 border-black"></div>
      </div>
      <div className="grid grid-cols-3 gap-5 ">
        {images.map((image) => {
          return (
            <div
              className="box-border h-60 w-full p-4 flex items-center justify-center mb-12"
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            >
              <div
                className="h-4/5 w-2/3 box-border  relative inline-block -bottom-[50%] px-20 py-6 items-center text-center"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #838383",
                }}
              >
                <span
                  className=" border-b-2  pb-1   text-[16px] "
                  style={{
                    fontFamily: "Montserrat",
                    borderColor: "#1D1A1A",
                    color: "#1D1A1A",
                  }}
                >
                  {image.category}
                </span>
                <h1
                  className="text-[20px] font-bold"
                  style={{ fontFamily: "Vidaloka" }}
                >
                  {image.title}
                </h1>
                <span
                  style={{ fontFamily: "Montserrat", color: "#838383" }}
                  className="text-xs"
                >
                  {image.nameAndDate}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 mt-16">
        <div
          className="box-border h-[450px] w-full p-4  flex items-center justify-center"
          style={{
            backgroundImage: `url(${latest4})`,
          }}
        >
          <div
            className="h-3/4 w-2/3 box-border  relative inline-block -bottom-[50%] px-48 py-10 items-center text-center"
            style={{
              backgroundColor: "white",
              border: "1px solid #838383",
            }}
          >
            <span
              className=" border-b-2  pb-1  text-gray-500 text-[16px  ] "
              style={{
                fontFamily: "Montserrat",
                borderColor: "rgb(113, 113, 122)",
              }}
            >
              SKIN
            </span>
            <h1
              className="text-[32px] font-bold"
              style={{ fontFamily: "Vidaloka" }}
            >
              Sed dignissim quam nulla, at sodales elit venenatis at. In in
              fringilla
            </h1>
            <h1 className="text-[16px]">
              Donec eget leo laoreet, faucibus ante et, finibus orci. Nam
              pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras
              bibendum nisi a interdum facilisis…..
            </h1>
            <div className="mt-5">
              <span
                style={{ fontFamily: "Montserrat", color: "#838383" }}
                className="text-xs "
              >
                By Sarfraz Jasim - 29 July, 2023
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-48 mb-10 ">
        <img src={ad1} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Popular;
