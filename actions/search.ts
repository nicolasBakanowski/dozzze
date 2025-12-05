/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { bookingData } from "@/data/mock-api";
import { redirect } from "next/navigation";

export async function handleSearch(prevState: any, formData: FormData) {
  const checkin = formData.get("checkin") as string;
  const checkout = formData.get("checkout") as string;
  const adults = formData.get("adults") as string;
  const children = formData.get("children") as string;

  if (!checkin || !checkout) {
    return {
      message: "Please select both check-in and check-out dates.",
    };
  }

  if (new Date(checkin) >= new Date(checkout)) {
    return {
      message: "Check-out date must be after check-in date.",
    };
  }
  redirect(
    `/room-1?checkin=${checkin}&checkout=${checkout}&adults=${adults}&children=${children}`
  );
}

export async function handleCheckBooking(prevState: any, formData: FormData) {
  const hotelId = formData.get("hotelId") as string;
  const checkin = formData.get("checkin") as string;
  const checkout = formData.get("checkout") as string;
  const adults = formData.get("adults") as string;
  const children = formData.get("children") as string;

  const requestedCheckin = new Date(checkin);
  const requestedCheckout = new Date(checkout);

  const overlappingBooking = bookingData.some((booking) => {
    if (booking.hotelId !== hotelId) {
      return false;
    }
    const existingCheckin = new Date(booking.checkin);
    const existingCheckout = new Date(booking.checkout);
    return (
      requestedCheckin < existingCheckout &&
      requestedCheckout > existingCheckin
    );
  });

  if (!overlappingBooking) {
    redirect(
      `/checkout?hotelId=${hotelId}&checkin=${checkin}&checkout=${checkout}&adults=${adults}&children=${children}`
    );
  }

  return {
    data: {
      isBooked: true,
      message: "Already booked for the selected dates.",
    },
  };
}
