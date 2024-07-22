import React, { useState } from "react";

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
