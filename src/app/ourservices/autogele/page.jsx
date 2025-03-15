"use client";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Autogele.module.css";
import { motion } from "framer-motion";
import { ShoppingCart, MapPin, CreditCard, Package } from "lucide-react";
import Image from "next/image";

const geleProducts = [
  {
    id: 1,
    name: "Bridal Auto Gele",
    price: "₦25,000",
    image: "/images/bridal-autogele.jpg",
  },
  {
    id: 2,
    name: "Classic Auto Gele",
    price: "₦18,000",
    image: "/images/classic-autogele.jpg",
  },
  {
    id: 3,
    name: "Rose Auto Gele",
    price: "₦15,000",
    image: "/images/rose-autogele.jpg",
  },
  {
    id: 4,
    name: "Pleated Auto Gele",
    price: "₦12,000",
    image: "/images/pleated-autogele.jpg",
  },
];

export default function AutoGelePage() {
  const [selectedGele, setSelectedGele] = useState(null);
  const [location, setLocation] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSelectGele = (gele) => {
    setSelectedGele(gele);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    if (!selectedGele || !location || !paymentMethod) {
      alert("Please fill all fields before ordering.");
      return;
    }
    alert(`Order placed for ${selectedGele.name} to ${location}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`container mt-5 ${styles.pageWrapper}`}
    >
      {/* Page Title */}
      <motion.h2
        className="text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Order Your Auto Gele
      </motion.h2>

      <p className="text-center text-muted mb-5">
        Select your preferred auto gele style, provide your location, and make
        payment.
      </p>

      {/* Product Grid */}
      <motion.div
        className="row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {geleProducts.map((gele) => (
          <div key={gele.id} className="col-md-3 mb-4">
            <motion.div
              className={`card p-3 text-center shadow-sm ${
                selectedGele?.id === gele.id ? styles.selected : ""
              }`}
              onClick={() => handleSelectGele(gele)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={gele.image}
                alt={gele.name}
                width={200}
                height={150}
                className="img-fluid rounded"
              />
              <h5 className="mt-3">{gele.name}</h5>
              <p className="text-warning fw-bold">{gele.price}</p>
              <button className="btn btn-outline-dark mt-2">
                <ShoppingCart size={18} /> Select
              </button>
            </motion.div>
          </div>
        ))}
      </motion.div>

      {/* Order Form */}
      {selectedGele && (
        <motion.div
          className={`card p-4 shadow-sm mt-5 ${styles.orderForm}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-center">Complete Your Order</h3>

          {/* Selected Gele Display */}
          <div className="text-center mb-3">
            <Image
              src={selectedGele.image}
              alt={selectedGele.name}
              width={200}
              height={150}
              className="img-fluid rounded shadow"
            />
            <h5 className="mt-2">{selectedGele.name}</h5>
            <p className="text-warning fw-bold">{selectedGele.price}</p>
          </div>

          <form onSubmit={handleOrder}>
            {/* Location Input */}
            <div className="mb-3">
              <label className="form-label">
                <MapPin size={20} className="me-2" /> Delivery Location
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your address"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            {/* Payment Method Dropdown */}
            <div className="mb-3">
              <label className="form-label">
                <CreditCard size={20} className="me-2" /> Payment Method
              </label>
              <select
                className="form-select"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option value="">Select Payment Method</option>
                <option value="bank-transfer">Bank Transfer</option>
                <option value="card">Debit/Credit Card</option>
                <option value="cash">Pay on Delivery</option>
              </select>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-warning w-100">
              <Package size={20} className="me-2" /> Place Order
            </button>
          </form>
        </motion.div>
      )}
    </motion.div>
  );
}
