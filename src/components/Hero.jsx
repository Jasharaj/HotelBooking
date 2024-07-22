import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate()
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/simplotel/image/upload/x_0,y_55,w_3600,h_2240,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/mayfair-himalayan-spa-resort-kalimpong/Exterior_New_Kanchenjunga_sept_2018__1_zjnwyo)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="w-full">
          <h1 className="mb-5 text-2xl md:text-4xl italic font-bold">Enjoy the peace & seclusion of our exclusive spa resort location.</h1>
          <p className="mb-5">
          Indulge in one of our special offers, which range from a supper at our Michelin-starred Restaurant Vinkeles to the opportunity to learn about the benefits of organizing the perfect romantic weekend.
          </p>
          <button className="btn btn-primary" onClick={()=>navigate("/make-a-reservation")}>Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
