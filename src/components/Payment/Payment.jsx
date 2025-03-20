"use client";

const Payment = ({ onPaymentSuccess }) => {
  const handlePayment = () => {
    // Placeholder for Flutterwave implementation
    console.log("Initiating Flutterwave payment...");

    // Simulate a successful payment response
    setTimeout(() => {
      onPaymentSuccess();
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Payment</h2>
      <p className="text-gray-700">
        Complete your payment securely using Flutterwave.
      </p>
      <div className="text-lg font-semibold text-gray-900">
        Booking Fee: <span className="text-primary-500">₦2000</span>
      </div>
      <p className="text-gray-600 italic">
        Secure your spot now and let us make your gele experience unforgettable!
      </p>
      <button
        className="px-6 py-2 bg-primary-500 text-white font-semibold rounded-lg disabled:opacity-50"
        onClick={handlePayment}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default Payment;
