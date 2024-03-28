import { StyledKey } from "@/components/KeyboardKey/styles";

const KeyboardKey = ({ symbol }: { symbol: string }) => (
  <StyledKey>{symbol}</StyledKey>
);

export default KeyboardKey;
