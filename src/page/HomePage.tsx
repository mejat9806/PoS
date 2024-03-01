import { useBookings } from "../Customer/Bookings/useBooking";
import DashBoard from "../UI/DashBoard";
import Error from "../UI/Error";
import Spinner from "../UI/Spinner";
import PopUpMessage from "../UI/PopUpMessage";
import { useEffect, useState } from "react";

function HomePage() {
  const [showPopUp, setShowPopUp] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("workInProgressBanner");
    return storedValue !== null ? JSON.parse(storedValue) : true;
  });
  const { isLoading: bookingLoading, error: bookingError } = useBookings();
  useEffect(() => {
    const storevalue = window.localStorage.getItem("workInProgressBanner");
    if (storevalue !== null) setShowPopUp(JSON.parse(storevalue));
  }, []);
  useEffect(() => {
    window.localStorage.setItem(
      "workInProgressBanner",
      JSON.stringify(showPopUp),
    );
  }, [showPopUp]);
  if (bookingLoading) {
    return <Spinner />;
  }
  if (bookingError) {
    return <Error>Something goes wrong</Error>;
  }

  return (
    <div className="mr-5 w-[full] sm:mr-10 sm:w-[70%]">
      <DashBoard />
      {showPopUp && (
        <PopUpMessage setShowPopUp={setShowPopUp} showPopUp={showPopUp} />
      )}
    </div>
  );
}

export default HomePage;
