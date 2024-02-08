import { useBookings } from "../Customer/Bookings/useBooking";
import CustomerList from "../Customer/CustomerList";
import Error from "../UI/Error";
import Order from "../UI/Order";
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
    <div className="grid  grid-cols-2 h-full">
      <div>
        <Order />
      </div>
      <div>
        <CustomerList />
      </div>
    </div>
  );
}

export default HomePage;
