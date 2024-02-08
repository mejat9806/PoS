import { BookingsType } from "./Bookings/getBookings";
import { useBookings } from "./Bookings/useBooking";
import Customer from "./Customer";

function CustomerList() {
  const { bookingsData = [] } = useBookings();

  return (
    <div>
      <h1 className="text-4xl font-roboto font-bold">Online Booking</h1>
      <div /* className="grid grid-cols-2 gap-5 w-[50%] " */>
        {bookingsData.map((data: BookingsType) => (
          <Customer key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default CustomerList;
