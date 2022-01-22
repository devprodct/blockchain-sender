//https://eth-ropsten.alchemyapi.io/v2/K-arJlr2Za0QdJRppNhfrAVrrc0kfd6m

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/K-arJlr2Za0QdJRppNhfrAVrrc0kfd6m`,
      accounts: [ 'd08a836a5f14bebb5269c5fcbab394bb763851717735c1149acb4f119c62c9e2' ]
    }
  }
}