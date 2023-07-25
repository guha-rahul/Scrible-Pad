const CONTRACT_ADDRESS = "0x3dDEc7b919148Bd1E12Ab82cd7fd333F08BEE544";
const META_DATA_URL =
  "";

async function mintNFT(contractAddress, metaDataURL) {
  const ExampleNFT = await ethers.getContractFactory("ExampleNFT");
const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
// Prompt user for account connections
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner();
  await ExampleNFT.attach(contractAddress).safeMint(signer.address, metaDataURL); // creates a new instance and attaches it to the specific address
  console.log("NFT minted to: ", owner.address);
}

// mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });
export { mintNFT };
