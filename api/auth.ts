import { IDBResponseDT } from "@/types/db-response";

export const emailVerify = async (token: string) => {
  const maskedToken = token ? `${token.slice(0, 6)}…` : "demo";
  const data: IDBResponseDT<{ message: string }> = {
    statusCode: 200,
    success: true,
    message: "Email verified",
    data: {
      message: `Your email linked to ${maskedToken} has been verified successfully.`,
    },
  };
  return data;
};
