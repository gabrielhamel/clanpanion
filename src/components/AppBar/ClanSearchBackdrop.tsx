import { MouseEventHandler } from "react";
import { Backdrop } from "@mui/material";
import { useRouter } from "next/router";
import { StyledSearchInputContainer } from "@/components/AppBar/styles";
import { ClanSearchInput } from "@/components/ClanSearchInput";

const ClanSearchBackDrop = ({
  isOpen,
  onLeave,
}: {
  isOpen: boolean;
  onLeave: () => void;
}) => {
  const router = useRouter();

  const handleOnClanChange = (id: number | null) => {
    onLeave();

    if (id) {
      void router.push(`/clan/${id}`);
    }
  };

  const handleOnBackDropClick: MouseEventHandler<HTMLElement> = (e) => {
    if ((e.target as HTMLElement).id === "clan-search-backdrop") {
      return onLeave();
    }
  };

  return (
    <Backdrop
      open={isOpen}
      onClick={handleOnBackDropClick}
      id="clan-search-backdrop"
    >
      <StyledSearchInputContainer>
        <ClanSearchInput onChange={handleOnClanChange} value={null} />
      </StyledSearchInputContainer>
    </Backdrop>
  );
};

export default ClanSearchBackDrop;
