import React, { useEffect, useState } from "react";
import PizzaOven from "../assets/Peproni-Pizza.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const [items, setItems] = useState([]);
  const [, setError] = useState(null);
  
  // Supabase configuration
  const SUPABASE_URL = "https://qbojtxkeayxsszvnblau.supabase.co";
  const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFib2p0eGtlYXl4c3N6dm5ibGF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2NDczODUsImV4cCI6MjA3NzIyMzM4NX0.XQexNZBjAoEF3dgdVKEakft0CEKYU3XD--qmVTRKZAE";
  
  // Fetch items from Supabase using fetch API
  useEffect(() => {
    fetchItems();
  }, []);
  
  const fetchItems = async () => {
    try {

      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/Hero?select=*`,
        {
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch items");
      }

      const data = await response.json();
      setItems(data || []);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching items:", err);
    }
  };

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
    <section className="Hero w-full overflow-x-hidden">
      <main className="h-full flex flex-col gap-6 py-20 bg-black/50">
        {/* Top */}
        <div className="flex md:flex-row flex-col  items-center md:space-x-8 space-y-4 px-8 m-auto md:px-12">
          {/* image */}
          <div className="Pizza md:w-64 md:h-64 w-36 h-36 drop-shadow-2xl">
            <img src={PizzaOven} alt="" className="rounded-full object-cover" />
          </div>
          {/* Text */}
          <div className="md:w-2/3 flex flex-col text-center items-center justify-between md:space-y-4 space-y-2 text-white">
            <h1 className="font-bold md:text-4xl text-xl ">
              Experience True Italian Flavor
            </h1>
            <p className="font-light md:text-lg text-sm w-4/5">
              Classic Italian flavors in every slice — fresh, cheesy, and
              delicious.
            </p>
            <a
              href="#"
              className="bg-red-600 px-2.5 py-1.5 rounded-lg cursor-pointer"
            >
              Order Now
            </a>
          </div>
        </div>

        {/* Bottom Swiper */}
        <div className="md:w-2/3 w-full py-4 m-auto">
          <Slider {...settings}>
            {items.map((pizza) => (
              <div className="Card-Container px-4" key={pizza.id}>
                <div className="flex flex-col  items-center h-64 text-center  space-y-4   rounded-xl bg-black/30 backdrop-blur-2xl overflow-hidden">
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="w-full h-36 object-cover rounded-t-xl "
                    loading="lazy"
                  />
                  <div className=" flex flex-col  text-white z-50">
                    <h2 className="md:text-2xl text-md font-bold">{pizza.name}</h2>
                    <p className="md:text-[1rem] text-[8px] text-gray-300 mt-1">{pizza.title}</p>
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

export default React.memo(Hero);
