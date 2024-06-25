require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/3Q41yDIIyc4TCC2wPhfIPhomTS3SJaI5",
      accounts: ["593ef3c829d28e189908c3040caf2eaf77e4966de0c91ae06902413268c3bb45"]
    }
  }
};

// 0x1a6B58451616554C5b6D2240ef983e8215ee4f5F                  ------>deplooyed address;