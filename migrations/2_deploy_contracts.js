var DoGoodPresale = artifacts.require("./DoGoodPresale.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(DoGoodPresale, {from: accounts[0], value: 15});
};

