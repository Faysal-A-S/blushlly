import React from "react";
import cat1 from "../Images/cat1.png";
import cat2 from "../Images/cat2.png";
import latest3 from "../Images/latest3.png";

const Categories = () => {
  const images = [
    {
      url: cat2,
      text: "SKIN",
    },
    {
      url: cat1,
      text: "HAIR",
    },
    {
      url: latest3,
      text: "MAKEUP",
    },
    {
      text: "TIPS",
      url: latest3,
    },
    {
      text: "SPA",
      url: latest3,
    },
  ];
  return (
    <div className="mx-40 my-10">
      <div className="flex flex-row justify-between">
        {images.map((image) => {
          return (
            <div
              className="flex  items-center justify-center"
              style={{
                height: "150px",
                width: "190px",
                backgroundImage: `url(${image.url})`,
              }}
            >
              <button className="category-button p-2 px-4 align-middle ">
                {image.text}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
