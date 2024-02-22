/* export async function getBookings() {
  const { data: bookings, error } = await supabase.from("bookings").select("*");
  if (error) {
   console.log()
    throw new Error("error fetching booking");
  }
  return bookings;
}
 */

import { PostgrestError } from "@supabase/supabase-js";
import supabase from "../../services/supabase";

export type BookingsType = {
  id: number;
  created_at: string;
  date: string;
  status: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  note: string;
  time: "lunch" | "dinner";
};

export async function getBookings(): Promise<BookingsType[]> {
  try {
    const { data: bookings, error } = (await supabase
      .from("bookings")
      .select("*")) as { data: BookingsType[]; error: PostgrestError | null };

    if (error) {
      console.error(error);
      throw new Error("Error fetching bookings");
    }

    return bookings ?? [];
  } catch (error) {
    // Handle errors appropriately
    console.error("Error fetching bookings:", error);
    throw new Error("Error fetching bookings");
  }
}
