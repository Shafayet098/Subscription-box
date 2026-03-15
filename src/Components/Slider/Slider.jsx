import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = ({ cards }) => {
  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
      >
        {
          cards.map((slide, i) => (
            <SwiperSlide key={i}>
              <div
                className="hero min-h-[90vh]"
                style={{
                  backgroundImage: `url(${slide.banner})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="hero-overlay bg-black/60"></div>

                <div className="hero-content text-center text-white">
                  <div className="max-w-xl">
                    <h1 className="text-5xl font-bold mb-5">{slide.name}</h1>

                    <p className="mb-6 text-lg">{slide.description}</p>

                    <div className="flex justify-center gap-4">
                      <a href="#subscriptionCards">
                        <button className="btn bg-primary hover:bg-secondary btn-outline border-secondary text-white">
                          Explore Boxes
                        </button>
                      </a>

                      <a href="#works">
                        <button className="btn btn-outline bg-primary text-white hover:bg-secondary border-secondary ">
                          How It Works
                        </button>
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  );
}

export default Slider;