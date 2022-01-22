//https://eth-ropsten.alchemyapi.io/v2/K-arJlr2Za0QdJRppNhfrAVrrc0kfd6m

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: process.env.URL,
      accounts: [ process.env.ACCOUNT ]
    }
  }
}

