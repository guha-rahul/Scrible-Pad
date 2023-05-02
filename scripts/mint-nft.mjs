const CONTRACT_ADDRESS = "0x08438C06b1a03D628604331e96DFcf6A6c116765";
const META_DATA_URL =
  "ipfs://bafyreidb5lvm4iaixqubz7dwruc4yzuxuq3yioonxwqflyumrpy65ce5su/metadata.json";

async function mintNFT(contractAddress, metaDataURL) {
  const ExampleNFT = await ethers.getContractFactory("ExampleNFT");
  const [owner] = await ethers.getSigners();
  await ExampleNFT.attach(contractAddress).safeMint(owner.address, metaDataURL); // creates a new instance and attaches it to the specific address
  console.log("NFT minted to: ", owner.address);
}

// mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });
export { mintNFT };
