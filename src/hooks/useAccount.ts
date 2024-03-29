import { useContext } from "react";
import { AccountContext } from "@/contexts/account";

export const useAccount = () => {
  return useContext(AccountContext);
};
