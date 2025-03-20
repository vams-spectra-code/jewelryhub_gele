"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Calendar,
  User,
  CreditCard,
  Scissors,
} from "lucide-react";
import ServiceSelection from "@/components/ServiceSelection/ServiceSelection";
import DateTimeSelection from "@/components/DateTimeSelection/DateTimeSelection";
import UserInfo from "@/components/UserInfo/UserInfo";
import Payment from "@/components/Payment/Payment";

const steps = [
  { id: 1, title: "Service Selection", icon: <Scissors className="w-5 h-5" /> },
  { id: 2, title: "Date & Time", icon: <Calendar className="w-5 h-5" /> },
  { id: 3, title: "Your Information", icon: <User className="w-5 h-5" /> },
  { id: 4, title: "Payment", icon: <CreditCard className="w-5 h-5" /> },
];

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <ServiceSelection />;
      case 2:
        return <DateTimeSelection />;
      case 3:
        return <UserInfo />;
      case 4:
        return <Payment />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white p-6 shadow-md hidden md:block">
        <h2 className="text-xl font-semibold text-zinc-700 mb-4">
          Book Your Gele Session
        </h2>
        <ul className="space-y-4">
          {steps.map((step) => (
            <li
              key={step.id}
              className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer transition ${
                currentStep === step.id
                  ? "bg-light text-primary-500"
                  : "bg-gray-50 text-gray-600"
              }`}
              onClick={() => setCurrentStep(step.id)}
            >
              {currentStep > step.id ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                step.icon
              )}
              <span>{step.title}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-white shadow-md">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderStepContent()}
          <div className="mt-6 flex justify-between">
            {currentStep > 1 && (
              <button
                onClick={() => setCurrentStep((prev) => prev - 1)}
                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg"
              >
                Back
              </button>
            )}
            {currentStep < steps.length && (
              <button
                onClick={() => setCurrentStep((prev) => prev + 1)}
                className="px-6 py-2 bg-primary-500 text-white rounded-lg"
              >
                Next
              </button>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default BookingPage;
