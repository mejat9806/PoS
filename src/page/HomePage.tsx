import { useBookings } from "../Customer/Bookings/useBooking";
import DashBoard from "../UI/DashBoard";
import Error from "../UI/Error";
import Spinner from "../UI/Spinner";

function HomePage() {
  const { isLoading: bookingLoading, error: bookingError } = useBookings();
  if (bookingLoading) {
    return <Spinner />;
  }
  if (bookingError) {
    return <Error>Something goes wrong</Error>;
  }

  return (
    <div className="mr-5 w-[70%] sm:mr-10">
      <DashBoard />
    </div>
  );
}

export default HomePage;
