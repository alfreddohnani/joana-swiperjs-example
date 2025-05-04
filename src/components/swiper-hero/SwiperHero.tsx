"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const SLIDES = [
  // Array
  [
    // sub-array
    {
      title: "Jane",
      src: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Deborah",
      src: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Christina",
      src: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Joshua",
      src: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Thomas",
      src: "https://images.pexels.com/photos/14697557/pexels-photo-14697557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Regina",
      src: "https://images.pexels.com/photos/12698454/pexels-photo-12698454.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Regulera",
      src: "https://images.pexels.com/photos/4974360/pexels-photo-4974360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ],
  [
    {
      title: "Christa",
      src: "https://images.pexels.com/photos/2089801/pexels-photo-2089801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Claudia",
      src: "https://images.pexels.com/photos/15602314/pexels-photo-15602314/free-photo-of-closeup-of-a-young-brunette-holding-a-flower-next-to-her-cheek.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Gershawn",
      src: "https://images.pexels.com/photos/2100697/pexels-photo-2100697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Sophia",
      src: "https://images.pexels.com/photos/2906635/pexels-photo-2906635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Pink",
      src: "https://images.pexels.com/photos/3205430/pexels-photo-3205430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Linda",
      src: "https://images.pexels.com/photos/2125067/pexels-photo-2125067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Akweley",
      src: "https://images.pexels.com/photos/4355345/pexels-photo-4355345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ],
  [
    {
      title: "Tenesha",
      src: "https://images.pexels.com/photos/2965690/pexels-photo-2965690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Rosa",
      src: "https://images.pexels.com/photos/3750717/pexels-photo-3750717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Kashmir",
      src: "https://images.pexels.com/photos/2240173/pexels-photo-2240173.jpeg",
    },
    {
      title: "Nadine",
      src: "https://images.pexels.com/photos/1412954/pexels-photo-1412954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Kun Lee",
      src: "https://images.pexels.com/photos/2177013/pexels-photo-2177013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Negredo",
      src: "https://images.pexels.com/photos/2250778/pexels-photo-2250778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ],
];

export default function HeroesSwiper() {
  return (
    <article className="relative">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="!h-[900px] container mx-auto"
      >
        {/** Change the height of the entire Swiper Slider here, if you want (!h-[900px]) */}
        {SLIDES.map((grid, i) => (
          <SwiperSlide key={String(i)}>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-x-4 gap-y-10">
              {grid.map(({ title, src }, i) => (
                <article key={String(i)} className="relative h-[400px]">
                  {/* Change the height of the image here, if you want. (h-[400px]) */}
                  <img src={src} alt={title} className="h-full" />
                  <div className="h-16 bg-black/40 absolute left-0 bottom-0 w-full flex items-center justify-center text-white font-semibold">
                    <h3>{title}</h3>
                  </div>
                </article>
              ))}
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
}
