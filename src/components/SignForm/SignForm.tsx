import { useCallback, useState } from "react";
import ReactJson from "react-json-view";

import "../TxForm/TxForm.scss";
import {
  SignDataRequest,
  useTonConnectUI,
  useTonWallet,
} from "@b2data/tonconnect-ui-react";

const defaultData: SignDataRequest = {
  /**
   * (integer): indicates the layout of payload cell that in turn defines domain separation.
   */
  schema_crc: 0x754bf91b, // Normal text
  /**
   *  (string, base64 encoded Cell): contains arbitrary data per its TL-B definition.
   */
  cell: "te6ccsEBAQEAEAAAABxUZXN0IFNpZ24gRGF0YcY8Qsc=",
  /**
   * (HEX string without 0x, optional): The public key of key pair from which DApp intends to sign the data.
   * If not set, the wallet is not limited in what keypair to sign.
   * If publicKey parameter is set, the wallet SHOULD to sign by keypair corresponding this public key;
   * If sign by this specified keypair is impossible, the wallet should show an alert and DO NOT ALLOW TO SIGN this data.
   */
  // publicKey: undefined,
};

export const SignForm = () => {
  const [data, setData] = useState(defaultData);
  const wallet = useTonWallet();
  const [tonConnectUi] = useTonConnectUI();

  const onChange = useCallback(async (value: any) => {
    setData(value);
  }, []);

  return (
    <div className="send-tx-form">
      <h3>Configure payload to Sign Data</h3>
      <ReactJson
        src={defaultData}
        theme="ocean"
        onEdit={onChange}
        onAdd={onChange}
        onDelete={onChange}
      />
      {wallet ? (
        <button onClick={() => tonConnectUi.signData(data)}>Sign Data</button>
      ) : (
        <button onClick={() => tonConnectUi.openModal()}>
          Connect wallet to Sign Data
        </button>
      )}
    </div>
  );
};
