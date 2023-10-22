import React from "react";

const SubscribeBlock = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full h-[400px] bg-[#DDDDDD] flex justify-center p-20 text-center">
      <div
        style={{ fontFamily: "Vidaloka" }}
        className="text-[36px] font-normal	"
      >
        <div className="mb-8">
          <h1>Subscribe For Best</h1>
          <h1>Beauty Tips</h1>
        </div>

        <form onSubmit={handleOnSubmit}>
          <div className="flex flex-row ml-16">
            <input
              type="text"
              className="w-[750px] rounded-[28px] pl-6 font-['Vidaloka'] text-[18px] "
              placeholder="Enter your email address"
            />
            <button className="subscribe -translate-x-[102%] my-1">
              Subscribe
            </button>
          </div>
        </form>
        <div className="flex flex-row  justify-center mt-10 mr-16">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            value="agree"
            className=" h-[18px] w-[18px] appearance-none border-2 border-black mt-1 checked:bg-gray-500"
          />
          <label
            for="agree"
            className="text-[16px] font-['Vidaloka'] font-[500] text-[#1D1A1A] "
          >
            &nbsp; &nbsp;I agree that my submitted data is being collected and
            stored.
          </label>
        </div>
      </div>
    </div>
  );
};

export default SubscribeBlock;
