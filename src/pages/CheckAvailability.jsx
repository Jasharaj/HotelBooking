import React, { useId, useState } from "react";
import { useForm } from "react-hook-form";
import appwriteService2 from "../appwrite/count.js";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { addDays, format } from "date-fns";
import { Button, Input, Loadingxs, Select } from "../components/index.js";


function CheckAvailability() {
  const { register, handleSubmit } = useForm();
  const [startdate, setStartDate] = useState(null);
  const [enddate, setEndDate] = useState(null);
  const [loading, setLoading] = useState(false);

  const id = useId();
  const [msg, setMsg] = useState("Check Availability");

  const submit = async (d) => {
    setMsg("Please Wait...")
    setLoading(true)
    const stdate = format(startdate, "dd/MM/yyyy");
    const eddate = format(enddate, "dd/MM/yyyy");
    const s = stdate.slice(0, 2);
    let e = eddate.slice(0, 2);
    const m = stdate.slice(2);
    const m2 = eddate.slice(2);
    let check = 1;
    if (m2 > m) { //For two month query
      for (let i = s; i <= "31"; i++) {
        let i2 = "0" + i
        let i3 = i2.slice(-2)
        const slot = await appwriteService2.getSlots(d.name, i3 + m);
        
        if (slot.total == 0) {
          //If the date is not present
          check = 0;
          e = "00"
          break;
        } else if (slot.documents[0].slots < d.guests) {
          check = 0;
          e = "00"
          break;
        }
      }

      for (let i = "01"; i <= e; i++) {
        let i2 = "0" + i
        let i3 = i2.slice(-2)
        const slot = await appwriteService2.getSlots(d.name, i3 + m2);
    
        if (slot.total == 0) {
          //If the date is not present
          check = 0;
          break;
        } else if (slot.documents[0].slots < d.guests) {
          check = 0;
          break;
        }
      }
    } else {
      for (let i = s; i <= e; i++) {
        let i2 = "0" + i
        let i3 = i2.slice(-2)
        const slot = await appwriteService2.getSlots(d.name, i3 + m);
        if (slot.total == 0) {
          //If the date is not present
          check = 0;
          break;
        } else if (slot.documents[0].slots < d.guests) {
          check = 0;
          break;
        }
      }
    }

    if (check == 1) {
      setMsg("✅ Rooms Available");
    } else {
      setMsg("⚠️ Not Available");
    }
    setLoading(false)
  };

  return (
    <div className="w-full p-3">
      <form
        onSubmit={handleSubmit(submit)}
        className="flex-col justify-center content-center h-[90vh] bg-gray-100 dark:bg-gray-800"
      >
        <div className="text-center text-1xl md:text-3xl italic text-black dark:text-white">{msg}</div>
        <div className="text-center text-1xl md:text-3xl text-black dark:text-white">⚠️ Available for Rourkela & Bhubaneswar upto 31st October</div>

        <Select
          options={[
            "Mayfair Bhubaneswar",
            "Mayfair Darjeeling",
            "Mayfair Gangtok",
            "Mayfair Goa",
            "Mayfair Gopalpur",
            "Mayfair Guwahati",
            "Mayfair Jharsuguda",
            "Mayfair Kalimpong",
            "Mayfair Puri",
            "Mayfair Purnea",
            "Mayfair Raipur",
            "Mayfair Rourkela",
            "Mayfair Siliguri",
          ]}
          label="Select a hotel:"
          {...register("name", {
            required: true,
          })}
        />
        <Input
          label="Guests(Atleast 1): "
          defaultValue="0"
          text="text-black"
          {...register("guests", {
            required: true,
            validate: (value) => value > 0 || "The number must be positive",
          })}
        />
        <div className="">
          <label
            htmlFor={id}
            className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select start date:
          </label>
          <DatePicker
            className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
            showIcon
            id={id}
            selected={startdate}
            onChange={(startdate) => setStartDate(startdate)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            required={true}
          />
          <label
            htmlFor={id}
            className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select end date:
          </label>
          <DatePicker
            className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
            showIcon
            id={id}
            selected={enddate}
            onChange={(enddate) => setEndDate(enddate)}
            dateFormat="dd/MM/yyyy"
            minDate={startdate}
            maxDate={addDays(startdate, 30)}
            required={true}
          />
        </div>
        {loading ? (
          <Button type="submit" className="inline-block mb-2 mt-4 pl-1 w-full" disabled={true}>
            <Loadingxs />
          </Button>
        ) : (
          <Button type="submit" className="inline-block mb-2 mt-4 pl-1 w-full">
            Check
          </Button>
        )}
      </form>
    </div>
  );
}

export default CheckAvailability;
