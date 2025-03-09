import { TonConnectButton } from "@b2data/tonconnect-ui-react";
import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <span>Demo DApp with React UI</span>
      <TonConnectButton />
    </header>
  );
};
