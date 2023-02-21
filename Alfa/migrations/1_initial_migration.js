// Make sure the DevToken contract is included by requireing it.
const AlfaCoin = artifacts.require("AlfaCoin");

// THis is an async function, it will accept the Deployer account, the network, and eventual accounts.
module.exports = async function (deployer, network, accounts) {
  // await while we deploy the AlfaCoin
  await deployer.deploy(AlfaCoin, "Alfa Coin", "Alfa", 18, 5000000);
  const alfaCoin = await AlfaCoin.deployed()

};