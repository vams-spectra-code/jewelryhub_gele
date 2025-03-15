"use client";

import React, { useState, useRef, useEffect } from "react";
import { MapPin, CalendarClock } from "lucide-react";
import GeleStyles from "@/components/GeleStyles/GeleStyles";
import { artists } from "@/helpers/dataStore";
import { images } from "@/helpers/dataStore";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Booking.module.css";
import CalendarClockModal from "@/components/CalendarClockModal/CalendarClockModal";
import Image from "next/image";

const Booking = () => {
  const [selectedArtist, setSelectedArtist] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [address, setAddress] = useState("");
  const [eventType, setEventType] = useState("");
  const [notes, setNotes] = useState("");
  const [modalPosition, setModalPosition] = useState(null);
  const dateTimePickerRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [selectedGele, setSelectedGele] = useState(null);

  const geleStylesData = [
    {
      id: 1,
      name: "Bridal Gele",
      price: "₦15,000",
      image: images.collage6,
    },
    {
      id: 2,
      name: "Avant-Garde",
      price: "₦12,000",
      image: images.collage2,
    },
    { id: 3, name: "Rose Gele", price: "₦10,000", image: images.collage3 },
    {
      id: 4,
      name: "Pleated Gele",
      price: "₦8,000",
      image: images.collage4,
    },
    { id: 5, name: "Rose Gele", price: "₦70,000", image: images.collage5 },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDateTimeSelect = (date, time) => {
    setSelectedDate(`${date} at ${time}`);
    setShowCalendar(false);
  };

  const handleSelectGele = (gele) => {
    console.log("Selected Gele:", gele);
    setSelectedGele(gele);
  };

  const makeupArtists = [
    { id: 1, name: "Tabee's Glam", image: artists.artist1 },
    { id: 2, name: "Didi's Glam", image: artists.artist2 },
    { id: 3, name: "Vicky's glam", image: artists.artist3 },
    { id: 4, name: "Glam Godess", image: artists.artist4 },
    { id: 5, name: "Jope Classic Makeover", image: artists.artist5 },
    { id: 6, name: "Lily's Glam House", image: artists.artist6 },
    { id: 7, name: "Molims Makeover", image: artists.artist7 },
  ];

  const options = [
    { value: "", label: "My Makeup Artist" },
    ...makeupArtists.map((artist) => ({
      value: artist.id,
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={artist.image}
            alt={artist.name}
            width={30}
            height={30}
            style={{ borderRadius: "50%", marginRight: 10 }}
          />
          {artist.name}
        </div>
      ),
    })),
  ];

  const handleArtistChange = (selectedOption) => {
    setSelectedArtist(selectedOption.value);
  };

  const handleShowCalendar = () => {
    const rect = dateTimePickerRef.current.getBoundingClientRect();
    setModalPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
    setShowCalendar(true);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className="container mt-4">
        <div className="row">
          {/* Left Sidebar */}
          <div className="col-md-6">
            <div className="card p-4 shadow-sm">
              <h4 className="mb-3">Book an Appointment</h4>

              {/* Address Input */}
              <div className="mb-3 d-flex align-items-center">
                <MapPin className="me-2 mt-4" size={20} />
                <div className="w-100">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              {/* Date & Time Picker */}
              <div className="mb-3 d-flex align-items-center">
                <CalendarClock
                  className="me-2 mt-4"
                  size={20}
                  role="button"
                  onClick={handleShowCalendar}
                />
                <div className="w-100">
                  <label className="form-label">Pick a Date & Time</label>
                  <div
                    className="d-flex align-items-center border p-2 rounded"
                    onClick={handleShowCalendar}
                    style={{ cursor: "pointer" }}
                    ref={dateTimePickerRef}
                  >
                    <span className="ms-2">
                      {selectedDate
                        ? selectedDate.toString()
                        : "No date selected"}
                    </span>
                  </div>
                </div>
              </div>
              {showCalendar && modalPosition && (
                <CalendarClockModal
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  onClose={() => setShowCalendar(false)}
                  onDateTimeSelect={handleDateTimeSelect}
                  position={modalPosition}
                />
              )}

              {/* Event Type Dropdown */}
              <div className="mb-3">
                <label className="form-label">Event Type</label>
                <select
                  className="form-select"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="party">Party</option>
                  <option value="casual">Casual</option>
                </select>
              </div>

              {/* Notes Section */}
              <div className="mb-3">
                <label className="form-label">Additional Notes</label>
                <textarea
                  className="form-control"
                  placeholder="What do you want?"
                  rows="4"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </div>

              {/* Makeup Artist Selection with Image Box */}
              <div className="mb-3 d-flex align-items-center">
                {/* Left: Image Box */}
                <div className="me-3">
                  <div
                    className="border rounded"
                    style={{
                      width: "80px",
                      height: "80px",
                      overflow: "hidden",
                    }}
                  >
                    {selectedArtist ? (
                      <Image
                        src={
                          makeupArtists.find((a) => a.id == selectedArtist)
                            ?.image
                        }
                        alt="Selected Artist"
                        className="img-fluid"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <div className="d-flex align-items-center justify-content-center h-100 text-muted">
                        Select an artist
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Dropdown with Small Images */}
                <div className="w-100">
                  <label className="form-label">Choose a Makeup Artist</label>
                  {isClient && (
                    <Select
                      value={options.find(
                        (option) => option.value === selectedArtist
                      )}
                      onChange={handleArtistChange}
                      options={options}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Gele Styles & Pricing */}
          <div className={`col-md-6 ${styles.geleStylesWrapper}`}>
            <div className={`card p-4 shadow-sm ${styles.geleStylesCard}`}>
              <h4 className="mb-3">Choose Your Gele Style</h4>
              {geleStylesData.map((gele) => (
                <GeleStyles
                  key={gele.id}
                  gele={gele}
                  onSelect={handleSelectGele}
                  className="mb-3"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ BookingPage Renders Booking Component
export default function BookingPage() {
  return <Booking />;
}
