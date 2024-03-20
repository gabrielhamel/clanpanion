import { useRouter } from "next/router";
import { z } from "zod";
import { ClanContainer } from "@/components/ClanContainer";
import { ClanProvider } from "@/contexts/clan";

const Clan = () => {
  const router = useRouter();
  const { clanId } = router.query;

  const numericClanId = clanId ? z.coerce.number().parse(clanId) : null;

  return (
    numericClanId && (
      <ClanProvider id={numericClanId}>
        <ClanContainer />
      </ClanProvider>
    )
  );
};

export default Clan;
