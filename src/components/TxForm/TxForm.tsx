import { useCallback, useState } from "react";
import ReactJson from "react-json-view";
import "./TxForm.scss";
import {
  SendTransactionRequest,
  useTonConnectUI,
  useTonWallet,
} from "@b2data/tonconnect-ui-react";

const defaultTx: SendTransactionRequest = {
  // The transaction is valid for 10 minutes from now, in unix epoch seconds.
  validUntil: Math.floor(Date.now() / 1000) + 600,
  messages: [
    {
      // The receiver's address.
      address:
        "0:c424531feb64afeb46607e0aff5609628207213308b62c123891d817389fc35b",
      // Amount to send in nanoTON. For example, 0.005 TON is 5000000 nanoTON.
      amount: "5000000",
      // (optional) State initialization in boc base64 format.
      stateInit: undefined,
      // (optional) Payload in boc base64 format.
      payload: "VGVzdCB0cmFuc2FjdGlvbg==",
    },
    {
      address:
        "0:d3e89e161ac9b43d5f742155cdc00a8ad721a5b44c608ce0cd0beb6894cbf61d",
      amount: "5000000",
    },
  ],
};

export const TxForm = () => {
  const [tx, setTx] = useState(defaultTx);
  const wallet = useTonWallet();
  const [tonConnectUi] = useTonConnectUI();

  const onChange = useCallback(
    (value: object) =>
      setTx((value as { updated_src: typeof defaultTx }).updated_src),
    [],
  );

  return (
    <div className="send-tx-form">
      <h3>Configure and send transaction</h3>
      <ReactJson
        src={defaultTx}
        theme="ocean"
        onEdit={onChange}
        onAdd={onChange}
        onDelete={onChange}
      />
      {wallet ? (
        <button onClick={() => tonConnectUi.sendTransaction(tx)}>
          Send transaction
        </button>
      ) : (
        <button onClick={() => tonConnectUi.openModal()}>
          Connect wallet to send the transaction
        </button>
      )}
    </div>
  );
};
