import { useState } from "react";
import { Autocomplete, Box, debounce, TextField } from "@mui/material";
import { skipToken } from "@tanstack/react-query";
import Image from "next/image";
import { apiClient } from "@/backend/client";
import { useRegion } from "@/hooks/useRegion";
import { regions } from "@/services/wargaming/region";
import { WargamingFindClanItem } from "@/services/wargaming/types";
import {
  ClanDetailLineContainer,
  ClanEmblemContainer,
  ClanOption,
} from "./styles";

const ClanSearchInput = ({
  onChange,
}: {
  onChange: (clanId: number | null) => void;
  value: number | null;
}) => {
  const { currentRegion } = useRegion();

  const [searchValue, setSearchValue] = useState("");

  const { data, isLoading: findLoading } = apiClient.clan.find.useQuery(
    searchValue ? { name: searchValue, region: currentRegion } : skipToken,
  );

  const clans = data ?? [];

  return (
    <Autocomplete
      selectOnFocus={true}
      clearOnBlur={true}
      handleHomeEndKeys={true}
      clearOnEscape={true}
      loading={findLoading}
      autoComplete={true}
      loadingText="Loading..."
      noOptionsText="No results"
      filterOptions={(clan) => clan}
      isOptionEqualToValue={(option, newValue) => option.id === newValue.id}
      options={clans}
      filterSelectedOptions={true}
      forcePopupIcon={false}
      getOptionLabel={(clan) => clan.name}
      onInputChange={debounce((_, value) => setSearchValue(value), 250)}
      onChange={(_, newValue) => {
        onChange(newValue?.id ?? null);
      }}
      renderInput={(params) => (
        <TextField {...params} placeholder="Find a clan" size="medium" />
      )}
      renderOption={(props, option) => (
        <ClanOption {...props} key={option.id}>
          <ClanDetailLine
            {...props}
            onClick={(clan) => {
              onChange(clan.id);
            }}
            clan={option}
          />
        </ClanOption>
      )}
    />
  );
};

const ClanDetailLine = ({
  clan,
  onClick,
}: {
  clan: WargamingFindClanItem;
  onClick: (clan: WargamingFindClanItem) => void;
}) => {
  const { currentRegion } = useRegion();

  return (
    <ClanDetailLineContainer onClick={() => onClick(clan)}>
      <ClanEmblem
        emblemUrl={`https://${regions[currentRegion].websiteDomain}${clan.emblem_url}`}
      />
      <Box>
        <ClanTag tag={clan.tag} color={clan.hex_color} />
        <Box>{clan.name}</Box>
      </Box>
    </ClanDetailLineContainer>
  );
};

const ClanTag = ({ tag, color }: { tag: string; color: string }) => (
  <Box sx={{ color }}>
    <b>[{tag}]</b>
  </Box>
);

const ClanEmblem = ({ emblemUrl }: { emblemUrl: string }) => (
  <ClanEmblemContainer>
    <Image alt="clan-emblem" width={32} height={32} src={emblemUrl} />
  </ClanEmblemContainer>
);

export default ClanSearchInput;
