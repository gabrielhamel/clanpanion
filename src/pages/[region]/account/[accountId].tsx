import { useRouter } from "next/router";
import { z } from "zod";
import { AccountContainer } from "@/components/AccountContainer";
import { AccountProvider } from "@/contexts/account";

const Account = () => {
  const router = useRouter();
  const { accountId } = router.query;

  const numericAccountId = accountId
    ? z.coerce.number().parse(accountId)
    : null;

  return (
    numericAccountId && (
      <AccountProvider id={numericAccountId}>
        <AccountContainer />
      </AccountProvider>
    )
  );
};

export default Account;
