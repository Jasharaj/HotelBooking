import React, { useId, useState, useEffect } from "react";
import authService from "../appwrite/auth";
import { Button, Loadinglg, Table } from "../components";
import appwriteService1 from "../appwrite/config.js";
import appwriteService2 from "../appwrite/count.js";

function YourBookings() {
  const [bookings, setBookings] = useState([]);
  const [msg, setMsg] = useState("❌Cancel ");
  const [loading,setLoading] = useState(false)

  let num = 0;

  const getUser = async () => {
    const user = await authService.getCurrentUser();
    const userId = user.$id;
    appwriteService1.getBookings(userId).then((t) => {
      if (t.documents.length == 0) {
        setBookings([
          {
            $id: "NO BOOKINGS",
            name: "NO BOOKINGS",
            guests: "NO BOOKINGS",
            startdate: "NO BOOKINGS",
            enddate: "NO BOOKINGS",
          },
        ]);
      } else {
        setBookings(t.documents);
      }
    });
    setLoading(false)
  };

  const cancelBooking = async (docId, name, guests, startdate, enddate) => {
    await appwriteService1.deleteBooking(docId);
    const s = startdate.slice(0, 2);
    let e = enddate.slice(0, 2);
    const m = startdate.slice(2);
    const m2 = enddate.slice(2);

    if (m2 > m) {
      //For two month query
      for (let i = s; i <= "31"; i++) {
        let i2 = "0"+i
        let i3 = i2.slice(-2)
        const slot = await appwriteService2.getSlots(name, i3 + m);
        const userId = slot.documents[0].$id;
        await appwriteService2.updateSlots(
          userId,
          slot.documents[0].slots + guests
        );
      }

      for (let i = "01"; i <= e; i++) {
        let i2 = "0" + i;
        let i3 = i2.slice(-2);
        const slot = await appwriteService2.getSlots(name, i3 + m2);
        const userId = slot.documents[0].$id;
        await appwriteService2.updateSlots(
          userId,
          slot.documents[0].slots + guests
        );
      }
    } else {
      for (let i = s; i <= e; i++) {
        let i2 = "0"+i
        let i3 = i2.slice(-2)
        const slot = await appwriteService2.getSlots(name, i3 + m);
        const userId = slot.documents[0].$id;
        await appwriteService2.updateSlots(
          userId,
          slot.documents[0].slots + guests
        );
      }
    }  
    getUser()
  };


  useEffect(() => {
    getUser();
  }, []);

  if (bookings.length == 0 || loading==true) {
    return (
      <div className="w-full h-[120vh] fixed top-0">
        <Loadinglg />
        <Loadinglg />
      </div>
    );
  }

  return (
    <div className="min-h-[90vh] w-full">
      <div className="overflow-x-auto">
        <table className="table bg-gray-100 dark:bg-gray-800 text-gray-400 rounded-none">
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
                num = num + 1;
              }
              return (
                <tr className="hover" key={num}>
                  <Table
                    docId={t.$id}
                    num={num}
                    name={t.name}
                    guests={t.guests}
                    startdate={t.startdate}
                    enddate={t.enddate}
                  />
                  <td
                    onClick={() => {
                      if (t.$id != "NO BOOKINGS") {
                        cancelBooking(t.$id,t.name,t.guests, t.startdate, t.enddate);
                        setLoading(true)
                      } else {
                        {
                          setMsg("NO BOOKINGS");
                        }
                      }
                    }}
                  >
                    <Button>{msg}</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default YourBookings;
