Contract_address = "0x";

const ethers = require("hardhat");

export const tokenbuy = async (minter, amount) => {
  const MyToken = await ethers.getContractFactory("MyToken");
  await MyToken.attach(Contract_address).mint(minter, amount, {
    value: ethers.utils.parseEther("0.1"),
  });
  console.log(`${amount} tokens are minted to ${minter}`);
};
