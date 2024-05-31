const myNFTs=[];
function mintNFT(title, description, creatorName, dateCreated) {
    const myNFT={
  
    "Label": title,
    "About": description,
    
     "Created By": creatorName,
     "Date of creation":  dateCreated
    }
 myNFTs.push(myNFT);
 console.log("Minted "+title);
};
 
 function listmyNFTs(){
 
 for(let i=0;i<myNFTs.length;i++){
     console.log("Label: \t\t\t" + myNFTs[i].title);
     console.log("About: \t" + myNFTs[i].description);
     console.log("Created By: \t" + myNFTs[i]["Created By"]);
     console.log("Date of creation: \t" + myNFTs[i]["Date of creation"]);
 }
}
  function getTotalSupply(){
      console.log("\nTotal NFTs: "+myNFTs.length);
  }

mintNFT("World is a home ","The time traveller","Jorawar","12th December 2004");
mintNFT("Catcyber ", "study on cats", "anuj", "28th May 2024");
mintNFT("angry lion ", "funny angry lion NFT", "jammu aale", "12th April 2021" );

listmyNFTs();
getTotalSupply();
