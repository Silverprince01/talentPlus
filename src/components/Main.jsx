import React from "react";

const Main = () => {
  return (
    <div className="  px-[30px] sm:px-[40px] lg:px-[120px]">
      {/* head */}
      <div className="flex justify-center ">
        <section className="bg-transparent sm:bg-white w-full h-full sm:h-[185.88px] flex flex-col sm:flex-row justify-evenly items-center px-[15%]">
          <div className=" bg-white sm:bg-[#BCBCBC] h-[45px] sm:h-[37.65px] w-[40%] sm:w-[15%] mb-[15px] sm:mb-0 rounded-[9.41px]"></div>
          <div className="bg-white sm:bg-[#BCBCBC] h-[45px] sm:h-[37.65px] w-[40%] sm:w-[15%] mb-[15px] sm:mb-0  rounded-[9.41px]"></div>
          <div className="bg-white sm:bg-[#BCBCBC] h-[45px] sm:h-[37.65px] w-[40%] sm:w-[15%] mb-[15px] sm:mb-0 rounded-[9.41px]"></div>
          <div className="bg-white sm:bg-[#BCBCBC] h-[45px] sm:h-[37.65px] w-[40%] sm:w-[15%] mb-[15px] sm:mb-0 rounded-[9.41px]"></div>
          <div className="bg-white sm:bg-[#BCBCBC] h-[45px] sm:h-[37.65px] w-[40%] sm:w-[15%] mb-[15px] sm:mb-0 rounded-[9.41px]"></div>
        </section>
      </div>

      {/* main */}
      <section className="flex flex-col sm:flex-row justify-between items-center pt-[45.54px] pb-[100.34px] w-full h-[1088.2px]">
        <div className="w-full  sm:w-[40%] md:w-[35%] flex flex-col justify-center ">
          <div className="bg-white   w-full h-[37.65px] mb-[15px] rounded-[9.41px]"></div>
          <div className="bg-white  w-[80%] h-[37.65px] mb-[15px] rounded-[9.41px]"></div>
          <div className="bg-white  w-[70%] h-[37.65px] mb-[15px] rounded-[9.41px]"></div>
          <div className="bg-white  w-[85%] h-[9.41px] mb-[8px] rounded-[9.41px]"></div>
          <div className="bg-white  w-[60%] h-[9.41px] rounded-[9.41px]"></div>

          <div className="flex justify-between items-start w-[80%] my-[35px]">
            <div className="bg-white w-[60%] rounded-[4.71px] h-[74.7px]"></div>
            <div className="bg-white w-[35%] rounded-[4.71px] h-[62.94px]"></div>
          </div>
          <div className="flex justify-between items-start w-[80%] my-[35px]">
            <div className="bg-white w-[63%] rounded-[4.71px] h-[74.7px]"></div>
            <div className="bg-white w-[32%] rounded-[4.71px] h-[62.94px]"></div>
          </div>
        </div>

        <div className="bg-white w-full sm:w-[50%] md:w-[50%] h-full"></div>
      </section>

      {/* bototom */}
      <section className="flex flex-col sm:flex-row justify-between h-full sm:h-[1049.38px] py-[108.23pxpx] items-center">
        <div className="w-full sm:w-[40%] md:w-[35%] py-[30px]">
          <div className="bg-white w-full h-[37.65px] mb-[15px] rounded-[9.41px]"></div>
          <div className="bg-white w-[80%] h-[37.65px] mb-[15px] rounded-[9.41px]"></div>
          <div className="bg-white w-[70%] h-[37.65px] mb-[15px] rounded-[9.41px]"></div>

          <div className="bg-white w-full h-[572.92px] mt-[40px]"></div>
        </div>
          <div className="grid w-full sm:w-[50%] md:w-[45%] grid-cols-2 grid-rows-auto gap-[20px] h-[738px]  my-[30px]">
            <div className="bg-white w-full h-full rounded-[9.41px]"></div>
            <div className="bg-white w-full h-full rounded-[9.41px]"></div>
            <div className="bg-white w-full h-full rounded-[9.41px]"></div>
            <div className="bg-white w-full h-full rounded-[9.41px]"></div>
          </div>
        
      </section>
    </div>
  );
};

export default Main;
