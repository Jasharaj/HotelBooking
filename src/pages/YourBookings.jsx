import React, { useId, useState, useEffect } from "react";
import authService from "../appwrite/auth";
import { useSelector } from "react-redux";
import { Button, Loadinglg, Table } from "../components";
import appwriteService1 from "../appwrite/config.js";
import appwriteService2 from "../appwrite/count.js";

function YourBookings() {
  const [bookings, setBookings] = useState([]);
  // const [num, setNum] = useState(1);
  const user = useSelector((state) => state.auth.userData);
  const userId = user.$id;
  const id = useId();
  let num = 0;

  const getBooking = async () => {
    const data = await appwriteService1.getBookings(userId);
    setBookings(data.documents);
  };

  useEffect(() => {
    appwriteService1.getBookings(userId).then((t) => {
      if (t) {
        setBookings(t.documents);
      }
    });
  }, []);

  if (bookings.length == 0) {
    return (
      <div className="w-full min-h-[80vh] py-8">
        <Loadinglg />
      </div>
    );
  }

  return (
    <div className="min-h-[90vh]">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Villa Name</th>
              <th>Guests</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((t) => {
              {
                console.log(t.$id);
              }

              {
                num = num + 1;
              }
              return (
                <Table
                  key={id}
                  docId={t.$id}
                  num={num}
                  name={t.name}
                  guests={t.guests}
                  startdate={t.startdate}
                  enddate={t.enddate}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default YourBookings;
