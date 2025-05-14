const CrimeRegistry = artifacts.require("CrimeRegistry");

module.exports = function (deployer) {
  deployer.deploy(CrimeRegistry);
};
