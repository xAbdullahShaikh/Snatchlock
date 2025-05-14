module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost
      port: 7545,        // Ganache port
      network_id: "5777"    // Match any network ID
    }
  },
  compilers: {
    solc: {
      version: "0.8.0" // Match your Solidity version
    }
  }
};
