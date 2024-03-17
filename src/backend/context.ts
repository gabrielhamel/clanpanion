import { WargamingService } from "@/services/wargaming/wargaming.service";

export const createContext = () => {
  const wargamingService = new WargamingService(
    "330f82b8c534d7ccd3eee5fb23980bef",
  );

  return {
    services: {
      wargaming: wargamingService,
    },
  };
};
