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
    <div className="mx-10">
      <DashBoard />
    </div>
  );
}

export default HomePage;
