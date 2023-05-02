// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.18;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";

// contract ExampleNFT  is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
//     using Counters for Counters.Counter;

//     Counters.Counter private _tokenIdCounter;

//     constructor() ERC721("Scribble_Pad", "Sp") {}

//     function safeMint(address to, string memory uri) public onlyOwner {
//         uint256 tokenId = _tokenIdCounter.current();
//         _tokenIdCounter.increment();
//         _safeMint(to, tokenId);
//         _setTokenURI(tokenId, uri);
//     }

//     // The following functions are overrides required by Solidity.

//     function _beforeTokenTransfer(
//         address from,
//         address to,
//         uint256 tokenId,
//         uint256 batchSize
//     ) internal override(ERC721, ERC721Enumerable) {
//         super._beforeTokenTransfer(from, to, tokenId, batchSize);
//     }

//     function _burn(
//         uint256 tokenId
//     ) internal override(ERC721, ERC721URIStorage) {
//         super._burn(tokenId);
//     }

//     function tokenURI(
//         uint256 tokenId
//     ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
//         return super.tokenURI(tokenId);
//     }

//     function supportsInterface(
//         bytes4 interfaceId
//     ) public view override(ERC721, ERC721Enumerable) returns (bool) {
//         return super.supportsInterface(interfaceId);
//     }
// }
//H++
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract BeastVerse is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    uint256 public mintRate = 0.01 ether;
    uint256 public MAX_SUPPLY = 3000;
    uint256 public com;
    uint256 public rar;
    uint256 public epi;
    uint256 public leg;
    string public message = "";

    constructor() ERC721("Beast Verse", "BV") {}

    function commonMint(address to, string memory uri, uint256) public payable {
        _tokenIdCounter.increment();
        require(totalSupply() < MAX_SUPPLY, "Cannot mint more!");
        require(msg.value >= mintRate, "Not enough Ether.");
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        com++;
        message = "success common";
    }

    function rareMint(address to, string memory uri, uint256) public payable {
        rar++;
        _tokenIdCounter.increment();
        require(totalSupply() < MAX_SUPPLY, "Cannot mint more!");
        require(msg.value >= mintRate, "Not enough Ether.");
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        message = "success rare";
    }

    function epicMint(address to, string memory uri, uint256) public payable {
        epi++;
        _tokenIdCounter.increment();
        require(totalSupply() < MAX_SUPPLY, "Cannot mint more!");
        require(msg.value >= mintRate, "Not enough Ether.");
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        message = "success epic";
    }

    function legendaryMint(
        address to,
        string memory uri,
        uint256
    ) public payable {
        leg++;
        _tokenIdCounter.increment();
        require(totalSupply() < MAX_SUPPLY, "Cannot mint more!");
        require(msg.value >= mintRate, "Not enough Ether.");
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        message = "success legendary";
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function _burn(
        uint256 tokenId
    ) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function withdraw() public onlyOwner {
        require(address(this).balance > 0, "Balance is 0");
        payable(owner()).transfer(address(this).balance);
    }
}
