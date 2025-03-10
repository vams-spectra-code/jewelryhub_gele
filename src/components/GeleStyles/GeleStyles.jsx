"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./GeleStyles.module.css";
import Image from "next/image";

const GeleStyles = ({ gele, onSelect }) => {
  const [selectedGele, setSelectedGele] = useState(null);

  const handleGeleSelection = () => {
    const newGele = selectedGele?.id === gele.id ? null : gele;
    setSelectedGele(newGele);
    onSelect(newGele);
  };

  return (
    <div className="d-flex align-items-center border rounded p-3 shadow-sm bg-white">
      {/* Left Side - Display Selected Gele Style */}
      <div className="me-3">
        <Image
          src={gele.image}
          alt={gele.name}
          className="img-fluid rounded border"
          style={{ width: "120px", height: "120px", objectFit: "cover" }}
        />
      </div>

      {/* Right Side - Gele Style Selection */}
      <div
        className={`p-3 flex-grow-1 text-center rounded border ${
          styles.geleStyles
        } ${selectedGele?.id === gele.id ? "border-warning bg-light" : ""}`}
        style={{ cursor: "pointer", transition: "1s" }}
        onClick={handleGeleSelection}
      >
        <h5 className={`mb-1 ${styles.text}`}>{gele.name}</h5>
        <p className="fw-bold">{gele.price}</p>
      </div>
    </div>
  );
};

export default GeleStyles;
