import { createContext, ReactNode } from "react";

type Player = {
  name: string;
};

export const PlayerContext = createContext<{
  player: Player | undefined;
  isLoading: boolean;
  isError: boolean;
}>({
  isError: false,
  isLoading: true,
  player: undefined,
});

export const PlayerProvider = ({
  children,
}: {
  children: ReactNode;
  id: number;
}) => {
  return (
    <PlayerContext.Provider
      value={{
        isError: false,
        isLoading: false,
        player: {
          name: "Gabouchet",
        },
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
