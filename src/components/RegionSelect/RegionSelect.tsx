import { MenuItem, Select } from "@mui/material";
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
    <Select
      onChange={(e) => handleOnChange(e.target.value)}
      value={currentRegion}
      renderValue={(value) => value}
    >
      {Object.keys(availableRegions).map((region) => (
        <MenuItem key={region} value={region}>
          {availableRegions[region as WargamingRegion]}
        </MenuItem>
      ))}
    </Select>
  );
};

export default RegionSelect;
