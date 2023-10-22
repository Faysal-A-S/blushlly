import React from "react";
import popular1 from "../Images/popular1.png";
import popular2 from "../Images/popular2.png";
import popular3 from "../Images/popular3.png";
import popular4 from "../Images/popular4.png";
import popular5 from "../Images/popular5.png";
const Popular = () => {
  const images = [
    {
      url: popular1,
      category: "SKIN",
      title: "Vivamus placerat Luctus Neque nec Faucibus",
      nameAndDate: "By Sarfraz Jasim - 29 July, 2023",
    },
    {
      url: popular2,
      category: "MAKEUP",
      title: "Vivamus placerat Luctus Neque nec Faucibus",
      nameAndDate: "By Sarfraz Jasim - 29 July, 2023",
    },
    {
      url: popular3,
      category: "HAIR",
      title: "Vivamus placerat Luctus Neque nec Faucibus",
      nameAndDate: "By Sarfraz Jasim - 29 July, 2023",
    },
  ];
  const bigImages = [
    {
      url: popular4,
      category: "SKIN",
      title:
        "Vivamus placerat Luctus Neque nec Faucibus Vivamus ultricies arcu Vivamus",
      nameAndDate: "By Sarfraz Jasim - 29 July, 2023",
    },
    {
      url: popular5,
      category: "TIPS",
      title:
        "Vivamus placerat Luctus Neque nec Faucibus Vivamus ultricies arcu Vivamus",
      nameAndDate: "By Sarfraz Jasim - 29 July, 2023",
    },
  ];
  return (
    <div className="mx-40">
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t-2 border-black"></div>
        <span className="flex-shrink mx-4 title-text">Popular Post</span>
        <div className="flex-grow border-t-2 border-black"></div>
      </div>
      <div className="grid grid-cols-3 gap-5 ">
        {images.map((image) => {
          return (
            <div
              className="box-border h-64 w-full p-4 flex items-center justify-center mb-12"
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div
                className="h-3/4 w-2/3 box-border  relative inline-block -bottom-[50%] px-20 py-6 items-center text-center"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #838383",
                }}
              >
                <span
                  className=" border-b-2  pb-1   text-xs "
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
      <div className="grid grid-cols-2 my-16 gap-5 ">
        {bigImages.map((image) => {
          return (
            <div
              className="box-border h-72 w-full p-4 flex items-center justify-center "
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div
                className="h-4/5 w-2/3 box-border  relative inline-block -bottom-[50%] px-24 py-6 items-center text-center"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #838383",
                }}
              >
                <span
                  className=" border-b-2  pb-1  text-gray-500 text-[12px] "
                  style={{
                    fontFamily: "Montserrat",
                    borderColor: "rgb(113, 113, 122)",
                  }}
                >
                  {image.category}
                </span>
                <h1
                  className="text-[24px] font-bold"
                  style={{ fontFamily: "Vidaloka" }}
                >
                  {image.title}
                </h1>

                <div className="mt-3">
                  <span
                    style={{ fontFamily: "Montserrat", color: "#838383" }}
                    className="text-[12px] "
                  >
                    By Sarfraz Jasim - 29 July, 2023
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
