require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    mumbai: {
      url: process.env.ALCHEMY_URL,
      accounts: [process.env.Private_key],
    },
  },
  solidity: {
    version: "0.8.18",
  },
};
