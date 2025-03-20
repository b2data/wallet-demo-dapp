import { TonConnectButton, useTonConnectUI } from "@b2data/tonconnect-ui-react";
import "./Header.scss";
import { useEffect, useState } from "react";

export const Header = () => {
  const [tonConnectUI] = useTonConnectUI();
  const [withPayload, setWithPayload] = useState(false);

  useEffect(() => {
    setWithPayload(localStorage.getItem("withPayload") === "true");
  }, []);

  useEffect(() => {
    if (withPayload) {
      const payload = `${Math.floor(Math.random() * Math.pow(10, 20))}`;
      console.log(`Payload: ${payload}`)

      tonConnectUI.setConnectRequestParameters({
        state: "ready",
        value: {
          tonProof: payload,
        },
      });
    }
  }, [withPayload]);

  return (
    <header>
      <span>Demo DApp with React UI</span>
      <div>
        <TonConnectButton />
        <div>
          <input
            type="checkbox"
            checked={withPayload}
            onChange={() => setWithPayload(!withPayload)}
          />
          With payload
        </div>
      </div>
    </header>
  );
};
