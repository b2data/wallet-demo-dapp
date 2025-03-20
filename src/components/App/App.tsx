import "./App.scss";

import { THEME, TonConnectUIProvider } from "@b2data/tonconnect-ui-react";

import { Header } from "../Header/Header";
import { FC } from "react";
import { TxForm } from "../TxForm/TxForm";
import { SignForm } from "../SignForm/SignForm";

export const App: FC = () => {
  return (
    <TonConnectUIProvider
      manifestUrl="https://b2data.github.io/wallet-demo-dapp/tonconnect-manifest.json"
      uiPreferences={{ theme: THEME.DARK }}
      walletsListSource="https://raw.githubusercontent.com/b2data/dapp/refs/heads/local/wallets-list.json"
      actionsConfiguration={{
        twaReturnUrl: import.meta.env.DEV
          ? "https://t.me/b2w_bot/app"
          : "https://t.me/b2wallet_bot/app",
      }}
    >
      <main>
        <Header />
        <TxForm />
        <SignForm />
      </main>
    </TonConnectUIProvider>
  );
};
