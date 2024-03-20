import { MenuItem } from "@mui/material";
import { StyledSelect } from "@/components/RegionSelect/styles";
import { useRegion } from "@/hooks/useRegion";
import {
  WargamingRegion,
  WargamingRegionSchema,
} from "@/services/wargaming/region";

const availableRegions: Record<WargamingRegion, string> = {
  ASIA: "🇯🇵 Asia",
  EU: "🇪🇺 Europe",
  NA: "🇺🇸 North America",
};

const RegionSelect = () => {
  const { currentRegion, switchRegion } = useRegion();

  const handleOnChange = (value: unknown) => {
    const region = WargamingRegionSchema.parse(value);
    switchRegion(region);
  };

  return (
    <StyledSelect
      onChange={(e) => handleOnChange(e.target.value)}
      value={currentRegion}
    >
      {Object.keys(availableRegions).map((region) => (
        <MenuItem key={region} value={region}>
          {availableRegions[region as WargamingRegion]}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

export default RegionSelect;
