// import { storeAsset } from "./store-asset.mjs";
// import { mintNFT } from "./mint-nft.mjs";
async function deployContract() {
  const ExampleNFT = await ethers.getContractFactory("bebrah ");
  const exampleNFT = await ExampleNFT.deploy();
  await exampleNFT.deployed();

  const txHash = exampleNFT.deployTransaction.hash;
  const txReceipt = await ethers.provider.waitForTransaction(txHash);

  const contractAddress = txReceipt.contractAddress;
  console.log("Contract deployed to address:", contractAddress);

  // const metadata_url = await storeAsset();
  // console.log(metadata_url);
  // await mintNFT(contractAddress, metadata_url);
}

deployContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
