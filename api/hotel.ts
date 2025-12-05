import { hotelData } from "@/data/mock-api";
import { IHotelRoom } from "@/types/hotel-d-t";

const byCategory = (category: string) =>
  hotelData.filter((hotel) => hotel.category === category);

export async function getModernHotels() {
  return byCategory("modern");
}

export async function getCityHotels() {
  return byCategory("city");
}

export async function getLuxuryHotel() {
  return hotelData.find((hotel) => hotel.category === "luxury") ?? hotelData[0];
}

export async function getHotelPackages() {
  return hotelData;
}

export async function getAllHotelRooms(
  _checkin?: string,
  _checkout?: string,
  adults?: string,
  children?: string,
  searchTerm?: string
) {
  let filtered = [...hotelData];

  if (searchTerm) {
    const normalized = searchTerm.toLowerCase();
    filtered = filtered.filter(
      (hotel) =>
        hotel.name.toLowerCase().includes(normalized) ||
        hotel.city.toLowerCase().includes(normalized) ||
        hotel.destination.name.toLowerCase().includes(normalized)
    );
  }

  if (adults) {
    const minAdults = parseInt(adults, 10);
    if (!Number.isNaN(minAdults)) {
      filtered = filtered.filter((hotel) => hotel.adults >= minAdults);
    }
  }

  if (children) {
    const minChildren = parseInt(children, 10);
    if (!Number.isNaN(minChildren)) {
      filtered = filtered.filter((hotel) => hotel.children >= minChildren);
    }
  }

  return filtered;
}

export async function getSingleHotel(id: string): Promise<IHotelRoom> {
  const hotel = hotelData.find((item) => item.id === id);
  if (!hotel) {
    throw new Error(`Hotel with id "${id}" not found in mock data.`);
  }
  return hotel;
}
