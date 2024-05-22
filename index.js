const nft_collection = [];

function mintNFT(name, owner, date) {
    const NFT = {
       "name" : name,
       "owner" : owner,
       "minted on" : date
    }
    nft_collection.push(NFT);
}


function listNFTs() {
    console.log("List of the minthed NFT's:")
    let i;
    let j = nft_collection.length;
    for (i = 0; i < j; i++) {
        console.log(nft_collection[i])
    }
}


function getTotalSupply() {
    console.log("Total minted nft = " + nft_collection.length)
}

mintNFT("Satyam's NFT", "Satyam Jha", "22/05/24");
mintNFT("Football's NFT", "Messi", "22/05/24");
mintNFT("Cricket's NFT", "Virat Kohli", "22/05/24);

listNFTs();
getTotalSupply();
