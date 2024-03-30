import { useState } from "react";
import { Autocomplete, Box, debounce } from "@mui/material";
import { skipToken } from "@tanstack/react-query";
import { apiClient } from "@/backend/client";
import { KeyboardKey } from "@/components/KeyboardKey";
import { useKeyboard } from "@/hooks/useKeyboard";
import { useRegion } from "@/hooks/useRegion";
import { isClan, WargamingFindItem } from "@/services/wargaming/types";
import AccountOption from "./AccountOption";
import ClanOption from "./ClanOption";
import SearchGroup from "./SearchGroup";
import {
  StyledList,
  StyledListOption,
  StyledPopper,
  StyledTextField,
} from "./styles";

const ClanAndAccountSearchInput = ({
  onClanSelected,
  onAccountSelected,
}: {
  onClanSelected: (id: number) => void;
  onAccountSelected: (id: number) => void;
}) => {
  const { currentRegion } = useRegion();
  const { hasKeyboard } = useKeyboard();

  const [searchValue, setSearchValue] = useState("");

  const { data, isLoading: findLoading } = apiClient.clan.find.useQuery(
    searchValue
      ? { name: searchValue, region: currentRegion, type: "all" }
      : skipToken,
  );

  const options = data ?? [];

  const handleOnOptionSelected = (option: WargamingFindItem | null) => {
    if (!option) {
      return;
    }

    if (isClan(option)) {
      onClanSelected(option.id);
    } else {
      onAccountSelected(option.id);
    }
  };

  return (
    <Autocomplete
      selectOnFocus={true}
      clearOnBlur={false}
      handleHomeEndKeys={true}
      clearOnEscape={false}
      loading={findLoading}
      autoComplete={true}
      PopperComponent={StyledPopper}
      loadingText="Loading..."
      groupBy={(option) => option.type}
      noOptionsText="No results"
      filterOptions={(clan) => clan}
      isOptionEqualToValue={(option, newValue) => option.id === newValue.id}
      options={options}
      filterSelectedOptions={true}
      forcePopupIcon={false}
      getOptionLabel={(option) => option.name}
      onInputChange={debounce((_, value) => setSearchValue(value), 250)}
      onChange={(_, option) => handleOnOptionSelected(option)}
      renderGroup={({ key, children, group }) => (
        <Box key={key}>
          <SearchGroup group={group}>{children}</SearchGroup>
        </Box>
      )}
      renderInput={(params) => (
        <StyledTextField
          {...params}
          autoFocus
          placeholder="Search players and clans"
          InputProps={{
            ...params.InputProps,
            endAdornment: hasKeyboard && <KeyboardKey symbol="esc" />,
          }}
          size="medium"
        />
      )}
      renderOption={(props, option) => (
        <StyledList {...props} key={option.id}>
          <StyledListOption>
            {isClan(option) ? (
              <ClanOption {...props} clan={option} />
            ) : (
              <AccountOption {...props} account={option} />
            )}
          </StyledListOption>
        </StyledList>
      )}
    />
  );
};

export default ClanAndAccountSearchInput;
