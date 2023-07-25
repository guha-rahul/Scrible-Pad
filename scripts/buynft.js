Contract_address = "0x";

const ethers = require("hardhat");

export const tokenbuy = async (from, to, token_id, value) => {
  const MyToken = await ethers.getContractFactory("MyToken");
  await MyToken.attach(Contract_address)._safeTransferFrom(from,to,token_id {
    value: ethers.utils.parseEther(value),
  }); ///value should be in string
  console.log(`The nft with ${token_id} is transfered from ${from} to ${to}`);
};
