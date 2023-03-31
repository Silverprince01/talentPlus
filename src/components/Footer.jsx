import React from "react";

const Footer = () => {
  return (
    <div className="px-[30px] sm:px-[40px] lg:px-[120px] py-[70px]">
      <section className="">
        <div className="  flex flex-col justify-center items-center mb-[20px]">
          <div className="bg-white h-[37.65px] mb-[20px] w-[80%] sm:w-[40%] rounded-[9.41px]"></div>
          <div className="bg-white h-[37.65px] mb-[20px] w-[70%] sm:w-[35%] rounded-[9.41px]"></div>
          <div className="bg-white h-[37.65px] mb-[20px] w-[60%] sm:w-[30%] rounded-[9.41px]"></div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="bg-white  h-[9.41px] w-[74%] sm:w-[37%] mb-[15px] rounded-[9.41px]"></div>
          <div className="bg-white  h-[9.41px] w-[50%] sm:w-[25%] rounded-[9.41px]"></div>
        </div>
      </section>

      <section className="px-0 sm:px-[30px] py-[30px]">
        <div className="bg-white h-[568.22px] rounded-[18.22px] w-full"></div>
        <div className="bg-white h-[62.65px] rounded-[4.71px] w-[40%] sm:w-[20%] mx-auto mt-[20px]"></div>
      </section>
    </div>
  );
};

export default Footer;
