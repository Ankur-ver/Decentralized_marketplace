const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("MarketModule", (m) => {
  console.log("Building MarketModule...");
  
  const marketplace = m.contract("DecentralizedMarketplace", []);
  
  // console.log("MarketModule built with contract:", marketplace);

  return { marketplace };
});
