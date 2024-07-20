import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function DatePick({ label }, ref) {
  // const [startDate, setStartDate] = useState(new Date());
  // return (
  //   <div className="w-full mb-4">
  //     <label
  //       htmlFor="datepicker"
  //       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  //     >
  //       {label}
  //     </label>
  //     <div className="border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
  //       <DatePicker
          
  //         showIcon
  //         selected={startDate}
  //         onChange={(date) => setStartDate(date)}
  //         className="bg-white text-black"
  //         dateFormat="dd/MM/yyyy"
  //         id="datepicker"
  //         icon={
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             width="1em"
  //             height="1em"
  //             viewBox="0 0 48 48"
  //           >
  //             <mask id="ipSApplication0">
  //               <g
  //                 fill="none"
  //                 stroke="#fff"
  //                 strokeLinejoin="round"
  //                 strokeWidth="4"
  //               >
  //                 <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
  //                 <path
  //                   fill="#fff"
  //                   d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
  //                 ></path>
  //               </g>
  //             </mask>
  //             <path
  //               fill="currentColor"
  //               d="M0 0h48v48H0z"
  //               mask="url(#ipSApplication0)"
  //             ></path>
  //           </svg>
  //         }
  //         ref={ref}
  //       />
  //     </div>
  //   </div>
  // )
  const [startDate, setStartDate] = useState();

  return (
    <div className="m-2">
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy" />
    </div>
  );
}

export default React.forwardRef(DatePick);
