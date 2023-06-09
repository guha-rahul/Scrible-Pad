import { NFTStorage, File } from "nft.storage";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.NFT_STORAGE_API_KEY;

async function storeAsset() {
  const client = new NFTStorage({ token: API_KEY });
  const metadata = await client.store({
    name: "Mona Lisa",
    description: "Mona Lisa is an awesome artwork!",
    image: new File(
      [await fs.promises.readFile("assets/me.png")],
      "MeNft.png",
      {
        type: "image/png",
      }
    ),
  });
  console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url);
  return metadata.url;
}

// storeAsset()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });
export { storeAsset };
