const { ethers } = require("hardhat");

async function main() {
  try {
    const BuyMeACoffee = await ethers.getContractFactory("BuyMeACoffee");
    console.log("Contract Factory retrieved");

    const buyMeACoffee = await BuyMeACoffee.deploy();
    console.log("Contract deployed");

    await buyMeACoffee.deployed();
    console.log("Contract deployment confirmed");
    

    console.log("BuyMeACoffee deployed to:", buyMeACoffee.address);
  } catch (error) {
    console.error("Error:", error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Script error:", error);
    process.exit(1);
  });
