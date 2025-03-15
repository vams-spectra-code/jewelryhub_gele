"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CalendarClockModal.module.css";
import moment from "moment";

// ✅ Dynamically import TimePicker to prevent SSR issues in Next.js
const TimePicker = dynamic(() => import("react-time-picker"), { ssr: false });

const CalendarClockModal = ({ onClose, onDateTimeSelect }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("12:00");
  const modalRef = useRef(null);

  // ✅ Prevent page scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling
    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling when modal closes
    };
  }, []);

  // ✅ Close modal when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // ✅ Handle confirm button
  const handleConfirm = () => {
    const formattedTime = moment(selectedTime, "HH:mm").format("hh:mm A");
    onDateTimeSelect(selectedDate.toDateString(), formattedTime);
    onClose();
  };

  return (
    <div
      className={`modal show d-block ${styles.wrapper}`}
      tabIndex="-1"
      onClick={handleOverlayClick}
      style={{ background: "rgba(0, 0, 0, 0)" }}
    >
      <div
        className={`modal-dialog ${styles.modalDialog}`}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`modal-content p-3 ${styles.modalContent}`}>
          <div className="modal-header">
            <h5 className="modal-title">Select Date & Time</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className={`modal-body ${styles.modalBody}`}>
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              className={`mb-3 w-100 ${styles.calendar}`}
              minDate={new Date()}
            />

            {/* ✅ Scroll wheel works here, but entire page won’t scroll */}
            <TimePicker
              onChange={setSelectedTime}
              value={selectedTime}
              disableClock={true}
              format="hh:mm a"
              clearIcon={null}
              clockIcon={null}
              className={`form-control w-100 ${styles.timePicker}`}
            />
          </div>
          <div className="modal-footer">
            <button className={`btn ${styles.btn}`} onClick={handleConfirm}>
              Confirm
            </button>
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarClockModal;
