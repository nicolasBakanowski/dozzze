"use client";
import Cookies from "js-cookie";
import { useEffect } from "react";
import useGlobalContext from "./use-global-context";
import { IUser } from "@/types/user-d-t";

export default function useAuthCheck() {
  const { handleSetUserInfo } = useGlobalContext();

  useEffect(() => {
    const localAuth = Cookies.get("userInfo");
    if (localAuth) {
      const auth: { accessToken: string; user: IUser } = JSON.parse(localAuth);
      if (auth?.accessToken && auth?.user) {
        handleSetUserInfo(auth.user, auth.accessToken);
      }
    }
  }, [handleSetUserInfo]);

  return true;
}
