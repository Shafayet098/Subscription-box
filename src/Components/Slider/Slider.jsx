import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  const slides = [
    {
      title: "Premium Subscription Boxes",
      text: "Discover curated monthly boxes filled with lifestyle, beauty and tech products.",
      img: "https://images.unsplash.com/photo-1607083206968-13611e3d76db"
    },
    {
      title: "Unbox Something New Every Month",
      text: "Enjoy premium products and a delightful unboxing experience delivered to your door.",
      img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
    },
    {
      title: "Curated For Your Lifestyle",
      text: "Choose subscription boxes designed around your interests.",
      img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad"
    }
  ];

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
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="hero min-h-[90vh]"
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="hero-overlay bg-black/60"></div>

              <div className="hero-content text-center text-white">
                <div className="max-w-xl">
                  <h1 className="text-5xl font-bold mb-5">{slide.title}</h1>

                  <p className="mb-6 text-lg">{slide.text}</p>

                  <div className="flex justify-center gap-4">
                    <button className="btn bg-pink-500 border-none text-white">
                      Explore Boxes
                    </button>

                    <button className="btn btn-outline text-white border-white">
                      How It Works
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Slider;