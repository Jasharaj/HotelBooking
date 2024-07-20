import React, { useState, useEffect } from "react";
import { Hero, HomePhoto } from "../components";

function Home() {
  let arr = [
    "https://res.cloudinary.com/simplotel/image/upload/w_2449,h_2000/x_0,y_459,w_2449,h_1269,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/mayfair-hotels-resorts/IMG_2015-HDR_gopalpur_page-0001",
    "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_108,y_324,w_3878,h_2009,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/mayfair-hotels-resorts/DSC08489_(1)",
    "https://res.cloudinary.com/simplotel/image/upload/w_2048,h_1371/x_0,y_155,w_2048,h_1061,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/mayfair-himalayan-spa-resort-kalimpong/extrior_lawn-1_wrnlzf",
    "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_2809/x_0,y_109,w_5000,h_2591,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/mayfair-oasis-resort-convention-jharsuguda/Facade_of_Mayfair_Oasis_Resort_Convention_Jharsuguda_17_wyzsaj",
    "https://res.cloudinary.com/simplotel/image/upload/w_4108,h_2244/x_0,y_61,w_4108,h_2129,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/mayfair-hotels-resorts/Sroll_1_Gangtok_vbli2f",
    "https://res.cloudinary.com/simplotel/image/upload/w_1600,h_1067/x_0,y_119,w_1600,h_829,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/mayfair-hotels-resorts/Scroll_3_Siliguri_ke9lom",
    "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3330/x_0,y_370,w_5000,h_2590,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/mayfair-hotels-resorts/Scroll_4_Lagoon_Bhubaneswar_ws2flc",
    "https://res.cloudinary.com/simplotel/image/upload/w_3872,h_2592/x_0,y_293,w_3872,h_2006,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/mayfair-convention-bhubaneswar/Conv._Centre_002_yeivyj",
  ];

  const [index, setIndex] = useState(0);

  const background = () => {
    setTimeout(() => {
      setIndex((index + 1) % 8);
    }, 3000);
  };

  useEffect(() => {
    background();
  }, [index]);

  return (
    <div className="">
      <div className="relative flex justify-center">
        <img
          className="w-full transition-opacity duration-1000 ease-in-out opacity-100"
          src={arr[index]}
          alt=""
        />
        <div className="absolute top-[60px] text-3xl text-black italic">
          Welcome to Mayfair!
        </div>
      </div>

      <div className="w-full px-20 py-10 bg-white text-center text-sm md:text-xl lg:text-5xl italic text-gray-600">
        Come for our fresh, delicious fare, and stay for views & experiences you
        won’t forget. An intimate hideaway with style, inspired by its natural
        environment.
      </div>
      <div className="flex bg-white gap-3 flex-wrap justify-evenly">
        <HomePhoto
          src="https://magnifico-nine.vercel.app/stylishPool.png"
          text="Stylish Pools"
        />

        <HomePhoto
          src="https://magnifico-nine.vercel.app/amazingView.png"
          text="Amazing Views"
        />
        <HomePhoto
          src="https://magnifico-nine.vercel.app/exquisiteFood.png"
          text="Exquisite Foods"
        />
      </div>
      <Hero />
    </div>
  );
}

export default Home;
