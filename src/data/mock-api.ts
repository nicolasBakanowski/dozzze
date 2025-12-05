import { IAmenities } from "@/types/amenities-d-t";
import { IBooking } from "@/types/booking-d-t";
import { IDestination } from "@/types/destination-d-t";
import { IHotelRoom } from "@/types/hotel-d-t";
import { IResReview } from "@/types/review-d-t";

export const amenitiesData: IAmenities[] = [
  {
    id: "amenity-1",
    name: "Infinity Pool",
    instructions: "Towels available at the deck, lifeguard on duty.",
    hours: "06:00 - 22:00",
    image: "/assets/img/feature/01.png",
  },
  {
    id: "amenity-2",
    name: "Wellness Spa",
    instructions: "Book signature treatments 12h in advance.",
    hours: "10:00 - 20:00",
    image: "/assets/img/feature/02.png",
  },
  {
    id: "amenity-3",
    name: "Private Beach Club",
    instructions: "Complimentary loungers & sunset snacks.",
    hours: "08:00 - 19:00",
    image: "/assets/img/feature/03.png",
  },
  {
    id: "amenity-4",
    name: "Fitness Studio",
    instructions: "Instructor-led classes every morning.",
    hours: "05:30 - 23:00",
    image: "/assets/img/feature/04.png",
  },
  {
    id: "amenity-5",
    name: "Kids Adventure Lab",
    instructions: "STEM inspired activities for young explorers.",
    hours: "09:00 - 18:00",
    image: "/assets/img/feature/05.png",
  },
  {
    id: "amenity-6",
    name: "Rooftop Lounge",
    instructions: "Live music every Friday, signature cocktails.",
    hours: "17:00 - 01:00",
    image: "/assets/img/feature/06.png",
  },
];

const baseAmenities = amenitiesData.slice(0, 4);

export const hotelData: IHotelRoom[] = [
  {
    id: "hotel-aurora",
    name: "Aurora Coast Suites",
    address: "Sunset Blvd 102, Cancun",
    city: "Cancun",
    category: "modern",
    countryCode: "MX",
    highRate: 480,
    lowRate: 310,
    location: { latitude: 21.1619, longitude: -86.8515 },
    destination: { _id: "dest-caribbean", name: "Caribbean Coast" },
    propertyCategory: 5,
    shortDescription:
      "Ocean-facing suites with contemporary interiors, private plunge pools and curated concierge experiences.",
    thumbNailUrl: "/assets/img/room/01.jpg",
    gallery: [
      "/assets/img/room-details/room-01.jpg",
      "/assets/img/room-details/room-02.jpg",
      "/assets/img/room-details/room-03.jpg",
    ],
    overview:
      "Aurora Coast Suites was imagined as a calming sanctuary for design lovers. Neutral palettes, tactile fabrics and panoramic decks invite you to pause. Each stay includes sunrise yoga on the pier and bespoke dining menus created with seasonal ingredients sourced from local farmers.",
    amenities: baseAmenities,
    sqFt: 820,
    beds: 2,
    bathrooms: 2,
    adults: 4,
    children: 2,
  },
  {
    id: "hotel-pampas",
    name: "Pampas Heritage Retreat",
    address: "Av. Libertad 455, Buenos Aires",
    city: "Buenos Aires",
    category: "city",
    countryCode: "AR",
    highRate: 360,
    lowRate: 225,
    location: { latitude: -34.6037, longitude: -58.38 },
    destination: { _id: "dest-urban", name: "Urban Escapes" },
    propertyCategory: 4,
    shortDescription:
      "Boutique address in the heart of Recoleta blending Art Deco flair with handcrafted Argentine touches.",
    thumbNailUrl: "/assets/img/room/02.jpg",
    gallery: [
      "/assets/img/room-details/room-02.jpg",
      "/assets/img/room-details/room-03.jpg",
      "/assets/img/room-details/room-04.jpg",
    ],
    overview:
      "From curated vinyl collections inside every suite to chef-led empanada workshops, Pampas Heritage Retreat immerses guests in the Buenos Aires lifestyle. Rooftop wine tastings highlight independent vineyards while the garden cafe hosts weekly live music.",
    amenities: amenitiesData.slice(1, 5),
    sqFt: 610,
    beds: 1,
    bathrooms: 1,
    adults: 2,
    children: 1,
  },
  {
    id: "hotel-laguna",
    name: "Laguna Desert Villas",
    address: "Palm Drive 88, Palm Springs",
    city: "Palm Springs",
    category: "modern",
    countryCode: "US",
    highRate: 420,
    lowRate: 260,
    location: { latitude: 33.8303, longitude: -116.5453 },
    destination: { _id: "dest-desert", name: "Desert Hideaways" },
    propertyCategory: 5,
    shortDescription:
      "Mid-century modern villas wrapped around reflective pools and citrus gardens.",
    thumbNailUrl: "/assets/img/room/03.jpg",
    gallery: [
      "/assets/img/room-details/room-03.jpg",
      "/assets/img/room-details/room-04.jpg",
      "/assets/img/room-details/room-01.jpg",
    ],
    overview:
      "Laguna Desert Villas celebrates California sunshine with breezy open-plan layouts, private fire pits and skylit bathrooms. Guests cycle to nearby art galleries, hop on guided hikes or unwind at the salt therapy lounge.",
    amenities: amenitiesData.slice(0, 4),
    sqFt: 740,
    beds: 2,
    bathrooms: 2,
    adults: 4,
    children: 1,
  },
  {
    id: "hotel-sierra",
    name: "Sierra Alpine Lodge",
    address: "Via Stella Alpina 11, Cortina",
    city: "Cortina d'Ampezzo",
    category: "luxury",
    countryCode: "IT",
    highRate: 520,
    lowRate: 350,
    location: { latitude: 46.5405, longitude: 12.1357 },
    destination: { _id: "dest-alps", name: "Alpine Peaks" },
    propertyCategory: 5,
    shortDescription:
      "Ski-in ski-out suites with cedar hot tubs, private sommeliers and Dolomite views.",
    thumbNailUrl: "/assets/img/room/04.jpg",
    gallery: [
      "/assets/img/room-details/room-04.jpg",
      "/assets/img/room-details/room-02.jpg",
      "/assets/img/room-details/room-03.jpg",
    ],
    overview:
      "Crafted entirely from locally sourced wood and stone, Sierra Alpine Lodge balances cozy tradition with cutting-edge wellness. Après-ski aperitivo spreads, pillow menus and guided glacier tours are part of every stay.",
    amenities: amenitiesData.slice(2),
    sqFt: 910,
    beds: 3,
    bathrooms: 3,
    adults: 5,
    children: 2,
  },
  {
    id: "hotel-marina",
    name: "Marina City Lofts",
    address: "Pier 7, Barcelona",
    city: "Barcelona",
    category: "city",
    countryCode: "ES",
    highRate: 310,
    lowRate: 190,
    location: { latitude: 41.3851, longitude: 2.1734 },
    destination: { _id: "dest-urban", name: "Urban Escapes" },
    propertyCategory: 4,
    shortDescription:
      "Creative lofts overlooking Port Vell with smart-room tech and complimentary city bikes.",
    thumbNailUrl: "/assets/img/room/room2/01.jpg",
    gallery: [
      "/assets/img/room-details/room-01.jpg",
      "/assets/img/room-details/room-03.jpg",
      "/assets/img/room-details/room-04.jpg",
    ],
    overview:
      "Marina City Lofts connects you with Barcelona's energy through resident artist programs, street-food tastings and rooftop flamenco evenings. Suites feature modular living areas perfect for workations or family trips.",
    amenities: amenitiesData.slice(0, 3),
    sqFt: 580,
    beds: 1,
    bathrooms: 1,
    adults: 2,
    children: 1,
  },
  {
    id: "hotel-tropica",
    name: "Tropica Rainforest Bungalows",
    address: "Selva Norte km 12, Costa Rica",
    city: "La Fortuna",
    category: "modern",
    countryCode: "CR",
    highRate: 390,
    lowRate: 250,
    location: { latitude: 10.473, longitude: -84.646 },
    destination: { _id: "dest-rainforest", name: "Rainforest Retreats" },
    propertyCategory: 5,
    shortDescription:
      "Glass bungalows with hanging daybeds, outdoor showers and private naturalist guides.",
    thumbNailUrl: "/assets/img/room/room3/01.jpg",
    gallery: [
      "/assets/img/room-details/room-02.jpg",
      "/assets/img/room-details/room-03.jpg",
      "/assets/img/room-details/room-01.jpg",
    ],
    overview:
      "Wake up to toucan songs, then kayak through volcanic springs. Tropica blends sustainability and boutique comfort with solar power, zero-waste kitchens and locally crafted textiles.",
    amenities: amenitiesData.slice(1, 5),
    sqFt: 690,
    beds: 2,
    bathrooms: 2,
    adults: 3,
    children: 2,
  },
];

const destinationBase: Pick<IDestination, "id" | "name" | "description" | "image">[] = [
  {
    id: "dest-caribbean",
    name: "Caribbean Coast",
    description: "Sugar-sand beaches, turquoise waters and curated coastal escapes.",
    image: "/assets/img/destination/01.jpg",
  },
  {
    id: "dest-urban",
    name: "Urban Escapes",
    description: "Architectural icons, Michelin dining and culture-packed weekends.",
    image: "/assets/img/destination/02.jpg",
  },
  {
    id: "dest-desert",
    name: "Desert Hideaways",
    description: "Dramatic dunes, stargazing terraces and cinematic pools.",
    image: "/assets/img/destination/03.jpg",
  },
  {
    id: "dest-alps",
    name: "Alpine Peaks",
    description: "Ski safaris, cedar saunas and views across the Dolomites.",
    image: "/assets/img/destination/04.jpg",
  },
  {
    id: "dest-rainforest",
    name: "Rainforest Retreats",
    description: "Mist-shrouded canopies, wildlife encounters and thermal rivers.",
    image: "/assets/img/destination/05.jpg",
  },
];

export const destinationData: IDestination[] = destinationBase.map((destination) => {
  const hotelsInDestination = hotelData.filter(
    (hotel) => hotel.destination._id === destination.id
  );
  const avg =
    hotelsInDestination.reduce((sum, hotel) => sum + hotel.propertyCategory, 0) /
    (hotelsInDestination.length || 1);
  return {
    ...destination,
    hotels: hotelsInDestination.map((hotel) => ({
      name: hotel.name,
      propertyCategory: hotel.propertyCategory,
    })),
    avgPropertyCategory: Number.isNaN(avg) ? null : parseFloat(avg.toFixed(1)),
  };
});

export const reviewData: IResReview[] = [
  {
    id: "review-1",
    hotelId: "hotel-aurora",
    comment:
      "Sunrise yoga on the pier was unforgettable and the suite smelled of fresh lemongrass every afternoon. Can't wait to return.",
    ratings: {
      staff: 5,
      cleanliness: 5,
      checkIn: 5,
    },
    username: "Camila M.",
    avgRating: "5.0",
    createdAt: "2024-05-18T10:00:00.000Z",
  },
  {
    id: "review-2",
    hotelId: "hotel-sierra",
    comment:
      "Our private sommelier curated a Dolomite tasting flight that rivaled Michelin restaurants. Service felt telepathic.",
    ratings: {
      staff: 5,
      cleanliness: 5,
      checkIn: 4,
    },
    username: "Martin M.",
    avgRating: "4.7",
    createdAt: "2024-02-02T12:30:00.000Z",
  },
  {
    id: "review-3",
    hotelId: "hotel-pampas",
    comment:
      "Loved the vinyl library and rooftop asado. Rooms are compact but beautifully detailed.",
    ratings: {
      staff: 4,
      cleanliness: 5,
      checkIn: 5,
    },
    username: "Sofia R.",
    avgRating: "4.6",
    createdAt: "2023-11-11T18:15:00.000Z",
  },
];

export const bookingData: IBooking[] = [
  {
    id: "booking-1",
    hotelId: "hotel-aurora",
    userId: "guest-demo",
    checkin: "2024-08-12",
    checkout: "2024-08-16",
    adults: 2,
    children: 1,
  },
  {
    id: "booking-2",
    hotelId: "hotel-sierra",
    userId: "guest-demo",
    checkin: "2024-12-20",
    checkout: "2024-12-27",
    adults: 4,
    children: 2,
  },
];
