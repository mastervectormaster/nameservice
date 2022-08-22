// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSetName } from "./types/nameservice/tx";
import { MsgBuyName } from "./types/nameservice/tx";
import { MsgDeleteName } from "./types/nameservice/tx";


const types = [
  ["/mastervectormaster.nameservice.nameservice.MsgSetName", MsgSetName],
  ["/mastervectormaster.nameservice.nameservice.MsgBuyName", MsgBuyName],
  ["/mastervectormaster.nameservice.nameservice.MsgDeleteName", MsgDeleteName],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgSetName: (data: MsgSetName): EncodeObject => ({ typeUrl: "/mastervectormaster.nameservice.nameservice.MsgSetName", value: MsgSetName.fromPartial( data ) }),
    msgBuyName: (data: MsgBuyName): EncodeObject => ({ typeUrl: "/mastervectormaster.nameservice.nameservice.MsgBuyName", value: MsgBuyName.fromPartial( data ) }),
    msgDeleteName: (data: MsgDeleteName): EncodeObject => ({ typeUrl: "/mastervectormaster.nameservice.nameservice.MsgDeleteName", value: MsgDeleteName.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
