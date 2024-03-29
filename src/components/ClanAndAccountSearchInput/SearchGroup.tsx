import { ReactNode } from "react";
import { Divider } from "@mui/material";
import { StyledGroupLabel } from "@/components/ClanAndAccountSearchInput/styles";

const SearchGroup = ({
  children,
  group,
}: {
  children: ReactNode;
  group: string;
}) => {
  const label = group === "clan" ? "Clans" : "Accounts";

  return (
    <>
      <StyledGroupLabel>{label}</StyledGroupLabel>
      <Divider />
      {children}
    </>
  );
};

export default SearchGroup;
