import { bookingData } from "@/data/mock-api";
import { IBooking } from "@/types/booking-d-t";

export async function getBookingById(id: string): Promise<IBooking> {
  const booking = bookingData.find((item) => item.id === id);
  if (!booking) {
    throw new Error(`Booking with id "${id}" not found in mock data.`);
  }
  return booking;
}
  
