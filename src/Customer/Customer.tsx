import { HiDotsVertical } from "react-icons/hi";
import { BookingsType } from "./Bookings/getBookings";

type CustumerType = {
  data: BookingsType;
};
function Customer({ data }: CustumerType) {
  const customerName = data.firstName + " " + data.lastName;
  return (
    <div className="flex gap-5">
      <h1>Booking#{data.id}</h1>
      <div>
        <h2>
          Name: <span>{customerName}</span>
        </h2>
        <h2>
          Booking Time: <span className="capitalize">{data.time}</span>
        </h2>
        <p>
          Note : <span>{data.note ? data.note : "none"}</span>
        </p>
        <span>Status : {data.status}</span>
      </div>
      <div className="space-x-5">
        <HiDotsVertical />
      </div>
    </div>
  );
}

export default Customer;
