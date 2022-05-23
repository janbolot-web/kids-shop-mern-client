import React, { Component } from "react";
import ContentLoader from "react-content-loader";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import Loader from "./Loader/Loader";

const SimpleSlider = ({ productsSlider, isLoading }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    autoplay: true,
    slidesToShow: 3,
    arrows: 0,
  };

  return (
    <div className="pt-20">
      <Slider {...settings}>
        {productsSlider.length
          ? productsSlider.map((product) => (
              <div
                key={product._id}
                className=" h-60 w-full flex items-center pl-5 outline-none cursor-grab"
              >
                <img src={product.imageUrl} className="h-max w-full " />
              </div>
            ))
          : [1, 2, 3].map((item) => (
              <div className="flex ml-2" key={item}>
                <ContentLoader
                  speed={2}
                  width={500}
                  height={240}
                  viewBox="0 0 500 240"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#e6e6e6"
                  className="pl-10"
                >
                  <rect x="8" y="9" rx="0" ry="0" width="500" height="240" />
                </ContentLoader>
              </div>
            ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
