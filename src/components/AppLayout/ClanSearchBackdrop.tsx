import { MouseEventHandler, useEffect } from "react";
import { useRouter } from "next/router";
import { ClanAndAccountSearchInput } from "@/components/ClanAndAccountSearchInput";
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

  useEffect(() => {
    const handleOnKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onLeave();
      }
    };

    addEventListener("keydown", handleOnKeyDown);
    return () => removeEventListener("keydown", handleOnKeyDown);
  }, [onLeave]);

  const handleOnClanSelected = (id: number) => {
    onLeave();

    if (id) {
      void router.push(`/${currentRegion}/clan/${id}`);
    }
  };

  const handleOnAccountSelected = (id: number) => {
    onLeave();

    if (id) {
      void router.push(`/${currentRegion}/account/${id}`);
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
        <ClanAndAccountSearchInput
          onAccountSelected={handleOnAccountSelected}
          onClanSelected={handleOnClanSelected}
        />
      </StyledSearchInputContainer>
    </StyledBackdrop>
  );
};

export default ClanSearchBackDrop;
