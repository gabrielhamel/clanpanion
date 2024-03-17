import { useState } from "react";
import { Autocomplete, Box, debounce, TextField } from "@mui/material";
import { skipToken } from "@tanstack/react-query";
import Image from "next/image";
import { apiClient } from "@/backend/client";
import { useTranslation } from "@/hooks/useTranslation";
import { regions, WargamingRegion } from "@/services/wargaming/region";
import { WargamingFindClanItem } from "@/services/wargaming/types";
import {
  ClanDetailLineContainer,
  ClanEmblemContainer,
  ClanInput,
  ClanOption,
} from "./styles";

const ClanSearchInput = ({
  onChange,
  value,
  region,
}: {
  onChange: (clan: WargamingFindClanItem | null) => void;
  value: WargamingFindClanItem | null;
  region: WargamingRegion;
}) => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState("");

  const { data, isLoading } = apiClient.clan.find.useQuery(
    searchValue ? { name: searchValue, region } : skipToken,
  );

  const clans = data ?? [];

  return (
    <Autocomplete
      selectOnFocus={true}
      clearOnBlur={true}
      handleHomeEndKeys={true}
      clearOnEscape={true}
      loading={isLoading}
      autoComplete={true}
      loadingText={`${t("state.loading")}...`}
      noOptionsText={t("state.empty")}
      filterOptions={(clan) => clan}
      isOptionEqualToValue={(option, newValue) => option.id === newValue.id}
      options={clans}
      filterSelectedOptions={true}
      forcePopupIcon={false}
      getOptionLabel={(clan) => clan.name}
      onInputChange={debounce((_, value) => setSearchValue(value), 250)}
      onChange={(_, newValue) => {
        onChange(newValue);
      }}
      renderInput={(params) =>
        value ? (
          <TextField
            {...params}
            label={t("clan.action.search")}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <ClanInput>
                  <ClanEmblem emblemUrl={value.emblem_url} region={region} />
                  <ClanTag color={value.hex_color} tag={value.tag} />
                </ClanInput>
              ),
            }}
          />
        ) : (
          <TextField {...params} label={t("clan.action.search")} />
        )
      }
      renderOption={(props, option) => (
        <ClanOption {...props} key={option.id}>
          <ClanDetailLine
            {...props}
            onClick={(clanId) => {
              onChange(clanId);
            }}
            clan={option}
            region={region}
          />
        </ClanOption>
      )}
    />
  );
};

const ClanDetailLine = ({
  clan,
  onClick,
  region,
}: {
  clan: WargamingFindClanItem;
  region: WargamingRegion;
  onClick: (clan: WargamingFindClanItem) => void;
}) => (
  <ClanDetailLineContainer onClick={() => onClick(clan)}>
    <ClanEmblem emblemUrl={clan.emblem_url} region={region} />
    <Box>
      <ClanTag tag={clan.tag} color={clan.hex_color} />
      <Box>{clan.name}</Box>
    </Box>
  </ClanDetailLineContainer>
);

const ClanTag = ({ tag, color }: { tag: string; color: string }) => (
  <Box sx={{ color }}>
    <b>[{tag}]</b>
  </Box>
);

const ClanEmblem = ({
  emblemUrl,
  region,
}: {
  emblemUrl: string;
  region: WargamingRegion;
}) => (
  <ClanEmblemContainer>
    <Image
      alt="clan-emblem"
      width={32}
      height={32}
      src={`https://${regions[region].websiteDomain}${emblemUrl}`}
    />
  </ClanEmblemContainer>
);

export default ClanSearchInput;
