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
      walletsListSource="https://raw.githubusercontent.com/b2data/dapp/refs/heads/main/wallets-list.json"
      walletsListConfiguration={{
        includeWallets: [
          // TODO: add new B2Wallet
          {
            appName: "telegram-wallet:b2wallet",
            name: "B2Wallet",
            imageUrl:
              "https://github.com/b2data/dapp/blob/main/icon192.png?raw=true",
            aboutUrl: "https://wallet.b2p.space/",
            universalLink: import.meta.env.DEV
              ? "https://t.me/b2w_bot/app?attach=wallet"
              : "https://t.me/b2wallet_bot/app?attach=wallet",
            // deepLink:"",
            bridgeUrl: import.meta.env.DEV
              ? "https://localhost:8087/tonconnect/bridge"
              : "https://wallet.b2p.space/api/tonconnect/bridge",
            platforms: ["ios", "android", "macos", "windows", "linux"],
          },
        ],
      }}
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
