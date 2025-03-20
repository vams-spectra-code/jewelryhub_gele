"use client";
import { useState } from "react";
import { motion } from "motion/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TimePicker } from "antd";
import "antd/dist/reset.css";
import dayjs from "dayjs";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DateTimeSelection = ({ onNext }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [address, setAddress] = useState("");

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Select Date & Time</h2>
      {selectedDate && selectedTime && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg text-gray-900">
          <p className="text-lg font-semibold">Selected Date & Time:</p>
          <p className="text-md">
            {dayjs(selectedDate).format("MMMM D, YYYY")},{" "}
            {dayjs(selectedTime).format("h:mm A")}
          </p>
        </div>
      )}
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Date</label>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              className="p-2 border rounded-lg w-full shadow-sm"
            />
          </motion.div>
        </div>
        <div className="w-2xs">
          <label className="block text-gray-700 font-semibold mb-2">Time</label>
          <TimePicker
            use12Hours
            format="h:mm A"
            value={selectedTime}
            onChange={(time) => setSelectedTime(time)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      <div className="w-lg">
        <label className="block text-gray-700 font-semibold mb-2">
          Event Address
        </label>
        <input
          type="text"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Enter event address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DateTimeSelection;
