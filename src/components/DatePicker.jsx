import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function DatePick({ label }, ref) {
  const [startDate, setStartDate] = useState();

  return (
    <div className="m-2">
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy" />
    </div>
  );
}

export default React.forwardRef(DatePick);
