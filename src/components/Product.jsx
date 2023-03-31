import React from "react";

const Product = () => {
  return (
    <div className="px-[30px] sm:px-[40px] lg:px-[120px]">
      <section>
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

      <section className="m-auto flex justify-center items-center w-[100%] sm:w-[45%] py-[20px]">
        <div className=" flex justify-evenly items-center w-full ">
          <div className="bg-white h-[54.12px] rounded-[4.71px] w-[20%]"></div>
          <div className="bg-white h-[54.12px] rounded-[4.71px] w-[20%]"></div>
          <div className="bg-white h-[54.12px] rounded-[4.71px] w-[20%]"></div>
          <div className="bg-white h-[54.12px] rounded-[4.71px] w-[20%]"></div>
        </div>
      </section>

      <section className="py-[30px]">
        <div className="h-full md:h-[1383.49px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-auto gap-[20px] ">
          <div className="bg-white h-[677.63px] w-full rounded-[18.82px]"></div>
          <div className="bg-white h-[677.63px] w-full rounded-[18.82px]"></div>
          <div className="bg-white h-[677.63px] w-full rounded-[18.82px]"></div>
          <div className="bg-white h-[677.63px] w-full rounded-[18.82px]"></div>
          <div className="bg-white h-[677.63px] w-full rounded-[18.82px]"></div>
          <div className="bg-white h-[677.63px] w-full rounded-[18.82px]"></div>
        </div>
        <div className="py-[20px]">
          <div className="m-auto bg-white h-[62.65px] w-[40%] md:w-[20%] rounded-[4.71px]"></div>
        </div>
      </section>
    </div>
  );
};

export default Product;
