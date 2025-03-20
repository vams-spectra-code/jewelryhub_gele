"use client";
import { useState } from "react";

const UserInfo = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6 w-lg ">
      <h2 className="text-3xl font-bold text-gray-900">Your Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Additional Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Any special requests?"
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
