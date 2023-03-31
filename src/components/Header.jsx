import React, { useState } from "react";

const Header = () => {
  const [nav, toggleNav] = useState(false);
  return (
    <section className=" flex justify-between items-center w-full py-[57.65px] px-[30px] sm:px-[40px] lg:px-[120px]">
      <div className="bg-white w-[30%] sm:w-[22%] h-[69.41px]"></div>
      <div
        className={`w-[60%] bg-[#BCBCBC] md:bg-transparent rounded-[20px] md:rounded-none shadow-lg md:shadow-none absolute ${
          nav ? "left-[25%] top-[20%] p-2 transition " : "left-[-100%]"
        }  md:relative md:left-0 flex flex-col md:flex-row justify-between items-center bg`}
      >
        <div className="bg-white w-[50%] md:w-[12%] mb-4 md:mb-0 h-[20px] md:h-[16.17px] rounded-[4.71px] cursor-pointer"></div>
        <div className="bg-white w-[50%] md:w-[12%] mb-4 md:mb-0 h-[20px] md:h-[16.17px] rounded-[4.71px] cursor-pointer"></div>
        <div className="bg-white w-[50%] md:w-[12%] mb-4 md:mb-0 h-[20px] md:h-[16.17px] rounded-[4.71px] cursor-pointer"></div>
        <div className="bg-white w-[50%] md:w-[12%] mb-4 md:mb-0 h-[20px] md:h-[16.17px] rounded-[4.71px] cursor-pointer"></div>
        <div className="bg-white w-[50%] md:w-[12%] mb-4 md:mb-0 h-[20px] md:h-[16.17px] rounded-[4.71px] cursor-pointer"></div>
        <div className="bg-white w-[50%] md:w-[20%] mb-4 md:mb-0 h-[63.53px] rounded-[4.71px] cursor-pointer"></div>
      </div>
      <div
        className="flex flex-col md:hidden cursor-pointer"
        onClick={() => toggleNav((prev) => !prev)}
      >
        <span className="w-[40px] mb-1 bg-white h-[5px] rounded-[9.41px]"></span>
        <span className="w-[40px] mb-1 bg-white h-[5px] rounded-[9.41px]"></span>
        <span className="w-[40px] mb-1 bg-white h-[5px] rounded-[9.41px]"></span>
      </div>
    </section>
  );
};

export default Header;
