import { ethers } from "ethers";

import contractData from "../build/contracts/CrimeRegistry.json";
const CrimeRegistryABI = contractData.abi;

const contractABI = CrimeRegistryABI;
const contractAddress = "0xe5c3Ec48e2a5Be59B5Ccb9dC8ff021f5EFEac992";

export const getEthereumContract = async () => {
  if (!window.ethereum) {
    alert("MetaMask is required!");
    return null;
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum); // Use ethers' built-in Web3Provider
  await provider.send("eth_requestAccounts", []); // Request wallet access
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  return contract;
};
