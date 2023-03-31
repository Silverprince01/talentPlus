import React from "react";
// import Slider from "react-slick";
import useWindowSize from "../hooks/useWindowSize";

const Carousel = () => {
  const { width } = useWindowSize();
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: width < 645 ? 1 : width < 768 ? 2 : 3,
    slidesToScroll: 1,
  };
  const ideas = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  return (
    <>
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

      <section className="w-full py-[30px] overflow-hidden">
        <Slider {...settings}>
          {ideas.map((idea) => {
            return (
              <div
                key={idea.id}
                className="flex justify-evenly w-full p-[20px] sm:p-0"
              >
                <div className="bg-white h-[148.22px] w-full sm:w-[90%] rounded-[18.23px]"></div>
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Carousel;
