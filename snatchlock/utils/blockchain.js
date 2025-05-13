import { ethers } from "ethers";
import CrimeRegistryABI from '../build/contracts/CrimeRegistry.json';


// Contract details
const contractABI = CrimeRegistryABI;
const contractAddress = "0xe5c3Ec48e2a5Be59B5Ccb9dC8ff021f5EFEac992"; // Replace with your contract address

export const connectToBlockchain = async () => {
  if (!window.ethereum) {
    alert("Please install MetaMask!");
    return;
  }

  // Create a provider and signer using MetaMask's Ethereum provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []); // Request access to the user's wallet
  const signer = provider.getSigner();

  // Instantiate the contract
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  return { contract, signer };
};

export const submitCrimeReport = async (ipfsHash, timestamp) => {
  const { contract, signer } = await connectToBlockchain();

  // Call the addCrimeReport function
  const transaction = await contract.addCrimeReport(ipfsHash, timestamp);
  await transaction.wait(); // Wait for the transaction to be mined

  console.log("Crime report added!");
};
