import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "./Button";
import appwriteService1 from "../appwrite/config.js";
import appwriteService2 from "../appwrite/count.js";


function Table({ docId, num, name, guests, startdate, enddate }) {

  return (
    <>
      <th>{num}</th>
      <td>{name}</td>
      <td>{guests}</td>
      <td>{startdate}</td>
      <td>{enddate}</td> 
    </>
  );
}

export default Table;
