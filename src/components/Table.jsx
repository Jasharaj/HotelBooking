import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "./Button";
import appwriteService1 from "../appwrite/config.js";
import appwriteService2 from "../appwrite/count.js";


const cancelBooking = async (docId, name, guests, startdate, enddate) => {
  await appwriteService1.deleteBooking(docId);
  const s = startdate.slice(0, 2);
  let e = enddate.slice(0, 2);
  const m = startdate.slice(2);
  const m2 = enddate.slice(2);

  if (m2 > m) {
    //For two month query
    for (let i = s; i <= "31"; i++) {
      const slot = await appwriteService2.getSlots(name, i + m);
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
      console.log(i3 + m2);
      const userId = slot.documents[0].$id;
      await appwriteService2.updateSlots(
        userId,
        slot.documents[0].slots + guests
      );
    }
  } else {
    for (let i = s; i <= e; i++) {
      const slot = await appwriteService2.getSlots(name, i + m);
      const userId = slot.documents[0].$id;
      await appwriteService2.updateSlots(
        userId,
        slot.documents[0].slots + guests
      );
    }
  }
};

function Table({ docId, num, name, guests, startdate, enddate }) {
  const [msg, setMsg] = useState("❌Cancel ");
  const [runOnce, setrunOnce] = useState(true);
  return (
    <tr className="hover">
      <th>{num}</th>
      <td>{name}</td>
      <td>{guests}</td>
      <td>{startdate}</td>
      <td>{enddate}</td>
      <td
        onClick={() => {
          if (runOnce) {
            cancelBooking(docId, name, guests, startdate, enddate);
            setMsg("Cancelled");
            setrunOnce(false);
          } else {
            {
              console.log("Kitni bar cancel karoge");
            }
          }
        }}
      >
        <Button >{msg}</Button>
      </td>
    </tr>
  );
}

export default Table;
