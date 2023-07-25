const CONTRACT_ADDRESS = "0x3dDEc7b919148Bd1E12Ab82cd7fd333F08BEE544";
const META_DATA_URL =
  "";

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
