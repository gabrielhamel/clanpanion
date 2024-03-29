import { WargamingFindAccountItem } from "@/services/wargaming/types";

const AccountOption = ({ account }: { account: WargamingFindAccountItem }) => {
  return <>{account.name}</>;
};

export default AccountOption;
