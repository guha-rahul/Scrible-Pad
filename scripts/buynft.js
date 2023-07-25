Contract_address = "0x";

const ethers = require("hardhat");

export const tokenbuy = async (from, token_id, value) => {
  const MyToken = await ethers.getContractFactory("MyToken");
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
// Prompt user for account connections
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner();
  await MyToken.attach(Contract_address)._safeTransferFrom(from,signer.address,token_id {
    value: ethers.utils.parseEther(value),  // nft gets transfered from "from " address to signer.address
  }); ///value should be in string
  console.log(`The nft with ${token_id} is transfered from ${from} to ${to}`);
};
