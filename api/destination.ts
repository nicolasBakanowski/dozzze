import { destinationData } from "@/data/mock-api";
import { IDestination } from "@/types/destination-d-t";

export async function getDestination() {
  return destinationData;
}

export async function getSingleDestination(id: string): Promise<IDestination> {
  const destination = destinationData.find((item) => item.id === id);
  if (!destination) {
    throw new Error(`Destination with id "${id}" not found in mock data.`);
  }
  return destination;
}
