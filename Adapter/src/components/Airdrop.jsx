import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function RequestAirdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function requestAirdrop() {
    let amount = document.getElementById("amount").value;
    async function trying () {
    
    try {
    await connection.requestAirdrop(
      wallet.publicKey,
      amount * LAMPORTS_PER_SOL
    );
    alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
}
catch (error) {
    alert("Error: " + error.message);
  }
await trying();
  }
  }
  return (
    <div>
      <br />
      <br />
      <input id="amount" type="text" placeholder="Amount" />
      <button onClick={requestAirdrop}>Request Airdrop</button>
    </div>
  );
}