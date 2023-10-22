import React from "react";
import insta1 from "../Images/insta1.png";
import insta2 from "../Images/insta2.png";
import insta3 from "../Images/insta3.png";
import insta4 from "../Images/insta4.png";
const InstagramFeed = () => {
  const images = [
    {
      url: insta1,
    },
    {
      url: insta2,
    },
    {
      url: insta3,
    },
    {
      url: insta4,
    },
  ];
  return (
    <div className="mx-40">
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t-2 border-black"></div>
        <span className="flex-shrink mx-4 title-text">Instagram Feed</span>
        <div className="flex-grow border-t-2 border-black"></div>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {images.map((image) => {
          return <img src={image.url} alt="img" />;
        })}
      </div>
      <div className="mt-10 flex justify-center mb-14">
        <button className="w-full subscribe text-[18px]">Follow Us</button>
      </div>
    </div>
  );
};

export default InstagramFeed;
