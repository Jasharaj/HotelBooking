import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ src, name, description, price }) {
  const navigate = useNavigate();
  const handleClick = ()=>{
    window.open('https://booking.mayfairhotels.com/be/index?m_currency=INR&fixp=&display=&groupId=NTg3&select_value=&locations=H0&searchtext=&propertyId=NTgy&checkIn=20-07-2024&checkOut=21-07-2024&roomadult=1&roomchild=0&currency=INR&submit=Search&promoCode=', '_blank');
  }

  return (

    <div className="card text-black dark:text-white bg-white dark:bg-black w-96 shadow-xl rounded-md hover:top-2 hover:translate-y-2 duration-200">
      <figure>
        <img
          src={src}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>Price per night: ₹{price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleClick}>Book on official website</button>
          <button className="btn btn-primary" onClick={()=>navigate("/make-a-reservation")}>Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
