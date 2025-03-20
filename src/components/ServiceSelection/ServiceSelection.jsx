"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { makeupArtists } from "@/helpers/dataStore";

const eventTypes = ["Wedding", "Birthday", "Photoshoot", "Other"];

const ServiceSelection = ({ onNext }) => {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [showAllArtists, setShowAllArtists] = useState(false);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Event Selection</h2>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Event Type
        </label>
        <select
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(e.target.value)}
        >
          <option value="">Select an event</option>
          {eventTypes.map((event) => (
            <option key={event} value={event}>
              {event}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Select Makeup Artist
        </label>
        <div className="grid grid-cols-3 gap-4">
          {makeupArtists.slice(0, 3).map((artist) => (
            <div
              key={artist.id}
              className={`p-3 border rounded-lg cursor-pointer transition hover:shadow-lg ${
                selectedArtist === artist.id
                  ? "border-primary-500"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedArtist(artist.id)}
            >
              <Image
                src={artist.image}
                alt={artist.name}
                className="mx-auto size-50 rounded-full"
              />
              <p className="text-center mt-2 font-semibold">{artist.name}</p>
            </div>
          ))}
          <div
            className="p-3 border rounded-lg cursor-pointer flex items-center justify-center text-primary-500 font-semibold hover:shadow-lg"
            onClick={() => setShowAllArtists(true)}
          >
            Show More
          </div>
        </div>
      </div>

      {showAllArtists && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-3/4 max-w-lg relative max-h-dvh ">
            <button
              className="absolute top-3 right-3"
              onClick={() => setShowAllArtists(false)}
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Select a Makeup Artist
            </h3>
            <div className="grid grid-cols-2 gap-4 overflow-scroll">
              {makeupArtists.map((artist) => (
                <div
                  key={artist.id}
                  className={`p-3 border rounded-lg cursor-pointer transition hover:shadow-lg ${
                    selectedArtist === artist.id
                      ? "border-primary-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => {
                    setSelectedArtist(artist.id);
                    setShowAllArtists(false);
                  }}
                >
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    className="rounded-full size-30 mx-auto"
                  />
                  <p className="text-center mt-2 font-semibold">
                    {artist.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceSelection;
