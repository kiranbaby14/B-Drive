const hre = require("hardhat");

async function main() {
  const BDrive = await hre.ethers.getContractFactory('BDrive');
  const bDrive = await BDrive.deploy();

  await bDrive.deployed();

  console.log(`Smat contract deployed to ${bDrive.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
