"use server";
import { ISaveReview } from "@/types/review-d-t";

export async function saveReview(data: ISaveReview) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    success: true,
    message: "Review stored locally.",
    data: {
      id: `local-${Date.now()}`,
      ...data,
    },
  };
}
