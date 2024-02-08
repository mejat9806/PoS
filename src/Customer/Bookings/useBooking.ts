import { useQuery } from "@tanstack/react-query";
import { getBookings } from "./getBookings";

export function useBookings() {
  const {
    isLoading,
    data: bookingsData,
    error,
  } = useQuery({ queryKey: ["bookings"], queryFn: () => getBookings() });
  return { bookingsData, error, isLoading };
}
