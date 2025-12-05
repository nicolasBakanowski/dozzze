import { reviewData } from "@/data/mock-api";
import { IResReview } from "@/types/review-d-t";

export async function getReviewById(hotelId: string) {
  return reviewData.filter((review) => review.hotelId === hotelId) as IResReview[];
}
