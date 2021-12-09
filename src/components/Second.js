import React from "react";

export const Second = () => {
  return (
    <div className="my-9 lg:my-0   mx-4 flex flex-col md:flex-row-reverse md:justify-center  lg:justify-between md:mx-6 md:my-12">
      <div className="flex items-center md:items-start justify-center lg:items-start   flex-wrap">
            <img src="./img/desktop.png" alt="bag" className="girl-bag lg:desktop-bag flex flex-wrap " />
      </div>
      <div className="flex  flex-col md:mr-28  md:mt-12 lg:mr-0 ">
        <div className="mt-6 md:mt-0 mb-6 mx-8  md:mx-0  md:justify-start  flex justify-center items-end ">
          <div className="absolute flex flex-col pb-1 md:ml-3">
            <h4 className="   font-semibold text-base  text-gray-800  ">
              Backpack
            </h4>
            <h4 className="    font-normal text-base text-gray-600 ">$129</h4>
          </div>
          <img src="./img/bag2.png" className="  white-bag1 lg:white-bag2 " alt="bag2" />
        </div>
        <div className="lg:flex lg:justify-between">
          <button className="flex justify-center  text-sm  gap-3 font-normal items-center border border-black w-full lg:w-36 h-8">
            Learn More
            <img src="./img/Frame.png" alt="arrow" />
          </button>
          <button className="bg-gray-800  text-white font-normal text-sm flex items-center justify-center w-full lg:w-36 lg:mt-0  mt-4 h-8">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
