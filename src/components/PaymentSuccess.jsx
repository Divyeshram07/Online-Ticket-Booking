import React from "react";
import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const location = useLocation();
  const { paymentDetails, qrCodeBase64 } = location.state || {};

  if (!paymentDetails || !qrCodeBase64) {
    return <p>Error: Missing payment details or QR code.</p>;
  }

  return (
    <div>
      <h2>Payment Successful</h2>
      <p>
        Movie: {paymentDetails.movie} <br />
        Theater: {paymentDetails.theater} <br />
        Time: {paymentDetails.time} <br />
        Seats: {paymentDetails.seats.join(", ")} <br />
        Total: ₹{paymentDetails.total} <br />
      </p>

      <h3>Your Payment QR Code:</h3>
      <img
        src={`data:image/png;base64,${qrCodeBase64}`}
        alt="Payment QR Code"
        width="300"
      />
    </div>
  );
};

export default PaymentSuccess;
