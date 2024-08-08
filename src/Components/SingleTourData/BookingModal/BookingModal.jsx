import { useRef } from "react";
import "./BookingMOdal.css";

function BookingModal({ setIsOpen }) {
  const ref = useRef();

  function closeModal() {
    if (ref.current) {
      setIsOpen();
    }
  }

  return (
    <div ref={ref} onClick={closeModal} className="Booking__Modal">
      <div>
        <h1>Congratulations...!</h1>
        <h1>🎊🤩👌🎉</h1>
        <h1>Your Tour is booked...!</h1>
        <button onClick={setIsOpen}>Close</button>
      </div>
    </div>
  );
}

export default BookingModal;
