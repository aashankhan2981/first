import React from "react";

export const Component = () => {
  return (
    <div className="flex md:flex-row   flex-col-reverse  flex-wrap lg:px-16 px-4 md:px-6 lg:py-12 py-5 md:py-11   bg-gray-800 w-full h-screen  ">
      <div className="lg:pt-36  md:pt-24 pt-5 md:w-1/2 h-1/2 md:h-auto flex flex-wrap flex-col ">
        <h2 className="font-extrabold lg:text-5xl md:text-4xl text-2xl  text-white">
          Big Savings.
        </h2>
        <h3 className="text-white font-light lg:text-5xl md:text-4xl text-2xl my-2 md:my-5 lg:my-6">
          Big Adventures.
        </h3>
        <p className="md:text-left text-white font-normal md:text-base md:pr-16 lg:pr-44 ">
          A random paragraph can also be an excellent way for a writer to tackle
          writers' block. Writing block can often happen due to being stuck.
        </p>
        <button className="text-white border border-white flex flex-wrap items-center justify-center gap-2 lg:mt-8 mt-4 md:mt-10 h-10 w-44 text-base font-medium">
          Shop Sale
          <img src="./img/arrow.png" alt="arrow" />{" "}
        </button>
      </div>
      {/* <div className="caret-black h-1/2"></div> */}
      <div className="bg-gray-600 md:w-1/2 flex flex-wrap justify-center h-1/2  md:h-auto    md:pt-8  lg:pt-12 lg:mb-0 md:mb-6 pl-0 md:pl-4 ">
        <img
          className="absolute lg:w-80 lg:h-3/4 md:w-56 md:h-3/4 h-2/4 "
          src="./img/pic.png"
          alt="headphones"
        />
      </div>
    </div>
  );
};
