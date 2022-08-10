import { ethers } from "hardhat";

async function main() {
    const rsvpContractFactory = await ethers.getContractFactory("Web3RSVP");
    console.log("Contract factory created");
    const rsvpContract = await rsvpContractFactory.deploy();
    console.log("Contract deploy started");
    await rsvpContract.deployed();
    console.log("Contract deployed to: ", rsvpContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
