import Image from "next/image";
import { ClanEmblemContainer } from "./styles";

const ClanEmblem = ({ emblemUrl }: { emblemUrl: string }) => (
  <ClanEmblemContainer>
    <Image alt="clan-emblem" width={32} height={32} src={emblemUrl} />
  </ClanEmblemContainer>
);

export default ClanEmblem;
