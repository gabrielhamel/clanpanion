import { ReactNode, useEffect, useState } from "react";
import { Search } from "@mui/icons-material";
import { AppBar as MuiAppBar, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { KeyboardKey } from "@/components/KeyboardKey";
import { RegionSelect } from "@/components/RegionSelect";
import { useKeyboard } from "@/hooks/useKeyboard";
import ClanSearchBackDrop from "./ClanSearchBackdrop";
import { StyledBackground, StyledLogoContainer, StyledToolbar } from "./styles";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AppBar />
      <StyledBackground />
      {children}
    </>
  );
};

const AppBar = () => {
  const { metaKey, hasKeyboard } = useKeyboard();
  const [isBackDropVisible, setBackDropVisibility] = useState(false);

  useEffect(() => {
    if (!hasKeyboard) {
      return;
    }

    const handleOnKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey && e.key === "k") || (e.ctrlKey && e.key === "k")) {
        e.preventDefault();
        setBackDropVisibility(true);
      }
    };

    addEventListener("keydown", handleOnKeyDown);
    return () => removeEventListener("keydown", handleOnKeyDown);
  }, [hasKeyboard]);

  const handleOnBackDropLeave = () => {
    setBackDropVisibility(false);
  };
  const handleOnBackDropEnter = () => {
    setBackDropVisibility(true);
  };

  return (
    <>
      <ClanSearchBackDrop
        isOpen={isBackDropVisible}
        onLeave={handleOnBackDropLeave}
      />
      <MuiAppBar position="static">
        <StyledToolbar>
          <StyledLogoContainer>
            <Link href="/">
              <Image
                src="/logo/9_destroyTimerDrownUI.webp"
                alt="logo"
                width={50}
                height={50}
              />
            </Link>
          </StyledLogoContainer>
          <TextField
            placeholder="Search..."
            onClick={handleOnBackDropEnter}
            InputProps={{
              endAdornment: hasKeyboard && (
                <>
                  <KeyboardKey symbol={metaKey} />
                  <KeyboardKey symbol="k" />
                </>
              ),
              startAdornment: <Search sx={{ marginRight: "0.3rem" }} />,
            }}
          />
          <RegionSelect />
        </StyledToolbar>
      </MuiAppBar>
    </>
  );
};

export default AppLayout;
