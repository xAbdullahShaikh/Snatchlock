import { create } from 'ipfs-http-client';

const ipfs = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

const uploadToIPFS = async (data) => {
  const result = await ipfs.add(JSON.stringify(data));
  console.log('IPFS CID:', result.path); // This is the hash to store in Ethereum
  return result.path;
};
