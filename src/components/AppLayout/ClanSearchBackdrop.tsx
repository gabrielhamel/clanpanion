import { MouseEventHandler } from "react";
import { useRouter } from "next/router";
import { ClanSearchInput } from "@/components/ClanSearchInput";
import { useRegion } from "@/hooks/useRegion";
import { StyledBackdrop, StyledSearchInputContainer } from "./styles";

const ClanSearchBackDrop = ({
  isOpen,
  onLeave,
}: {
  isOpen: boolean;
  onLeave: () => void;
}) => {
  const router = useRouter();
  const { currentRegion } = useRegion();

  const handleOnClanChange = (id: number | null) => {
    onLeave();

    if (id) {
      void router.push(`/${currentRegion}/clan/${id}`);
    }
  };

  const handleOnBackDropClick: MouseEventHandler<HTMLElement> = (e) => {
    if ((e.target as HTMLElement).id === "clan-search-backdrop") {
      return onLeave();
    }
  };

  return (
    <StyledBackdrop
      mountOnEnter={true}
      unmountOnExit={true}
      open={isOpen}
      onClick={handleOnBackDropClick}
      id="clan-search-backdrop"
    >
      <StyledSearchInputContainer>
        <ClanSearchInput onChange={handleOnClanChange} value={null} />
      </StyledSearchInputContainer>
    </StyledBackdrop>
  );
};

export default ClanSearchBackDrop;
