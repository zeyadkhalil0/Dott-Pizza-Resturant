import React, { useEffect, useState } from "react";
import PizzaOven from "../assets/Peproni-Pizza.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("https://hero-data.vercel.app/hero-pizza.json")
      .then((res) => res.json())
      .then((data) => setPizzas(data));
  }, []);

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

  return (
  
    <section className=" w-full overflow-x-hidden">
      <main className="h-full flex flex-col gap-6 py-20 bg-black/50">
        {/* Top */}
        <div className="flex md:flex-row flex-col  items-center space-y-4 px-8 m-auto md:px-12">
          {/* image */}
          <div className="Pizza md:w-64 md:h-64 w-36 h-36 drop-shadow-2xl">
            <img src={PizzaOven} alt="" className="rounded-full object-cover" />
          </div>
          {/* Text */}
          <div className="md:w-2/3 flex flex-col text-center items-center justify-between space-y-4 text-white">
            <h1 className="font-bold md:text-4xl text-md">Pizza Is Italiano</h1>
            <p className="font-light  text-sm w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              eaque laborum rerum earum tempora illo delectus quia, officiis non
              dolores, et culpa. Dicta nesciunt architecto sunt quos omnis velit
              incidunt.
            </p>
            <a href="#" className="bg-red-600 px-2.5 py-1.5 rounded-lg cursor-pointer">Order Now</a>
          </div>
        </div>

        {/* Bottom Swiper */}
        <div className="md:w-2/3 w-full py-4 m-auto">
                <Slider {...settings}>
            {pizzas.map((pizza) => (
              <div className="Card-Container px-4">
              <div className="flex flex-col  items-center h-64 text-center justify-between  px-2 py-4 rounded-xl bg-black/30 backdrop-blur-2xl overflow-hidden">
                <img
                  src={`https://hero-data.vercel.app/${pizza.image}`}
                  alt={pizza.name}
                  className="w-full h-28 object-cover rounded-xl "
                  loading="lazy"
                  />
                  <div className=" flex flex-col  text-white z-50">
                    <h2 className="text-2xl font-bold">{pizza.name}</h2>
                    <p className="text-gray-200 mt-1">{pizza.title}</p>
                  </div>
                </div>
                  </div>
            ))}
        </Slider>
            </div>
           </main>
    </section>
  );
};

export default Hero;
