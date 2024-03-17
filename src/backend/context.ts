import { WargamingService } from "@/services/wargaming/wargaming.service";

const getWargamingService = () => {
  const { WARGAMING_API_KEY } = process.env;

  if (!WARGAMING_API_KEY) {
    throw new Error("No WARGAMING_API_KEY provided");
  }

  return new WargamingService(WARGAMING_API_KEY);
};

export const createContext = () => {
  return {
    services: {
      wargaming: getWargamingService(),
    },
  };
};
