import { useState } from "react";
import { Autocomplete, Box, debounce, TextField } from "@mui/material";
import { skipToken } from "@tanstack/react-query";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { apiClient } from "@/backend/client";
import { useRegion } from "@/hooks/useRegion";
import { regions } from "@/services/wargaming/region";
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
}: {
  onChange: (clanId: number | null) => void;
  value: number | null;
}) => {
  const { t } = useTranslation();
  const { currentRegion } = useRegion();

  const [searchValue, setSearchValue] = useState("");

  const { data, isLoading: findLoading } = apiClient.clan.find.useQuery(
    searchValue ? { name: searchValue, region: currentRegion } : skipToken,
  );

  const { data: clan } = apiClient.clan.get.useQuery(
    value ? { id: value, region: currentRegion } : skipToken,
  );

  const clans = data ?? [];

  const currentClanOption = clans.find(({ id }) => id === value);
  const currentClanEmblem = clan
    ? clan.emblems.x32.portal
    : `https://${regions[currentRegion].websiteDomain}${currentClanOption?.emblem_url ?? ""}`;
  const currentClanTag = clan ? clan.tag : currentClanOption?.tag ?? "";
  const currentClanColor = clan
    ? clan.color
    : currentClanOption?.hex_color ?? "";

  return (
    <Autocomplete
      selectOnFocus={true}
      clearOnBlur={true}
      handleHomeEndKeys={true}
      clearOnEscape={true}
      loading={findLoading}
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
        onChange(newValue?.id ?? null);
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
                  <ClanEmblem emblemUrl={currentClanEmblem} />
                  <ClanTag color={currentClanColor} tag={currentClanTag} />
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
