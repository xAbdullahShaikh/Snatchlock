import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { getEthereumContract } from "../utils/ethereum";

const CrimeReportPage = () => {
  const [crimeLocation, setCrimeLocation] = useState("");
  const [evidenceCaught, setEvidenceCaught] = useState("");
  const [perpetratorDescription, setPerpetratorDescription] = useState("");
  const [ipfsHash, setIpfsHash] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dataToUpload = {
      crimeLocation,
      evidenceCaught,
      perpetratorDescription,
    };

    try {
      // Upload data to IPFS via Pinata
      const response = await axios.post(
        "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        dataToUpload,
        {
          headers: {
            pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
            pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_API_SECRET,
          },
        }
      );

      const hash = response.data.IpfsHash;
      setIpfsHash(hash);
      alert("Data successfully uploaded to IPFS!");

      // Fetch Ethereum contract instance
      const contract = await getEthereumContract();
      if (!contract) {
        alert("Failed to connect to the Ethereum contract.");
        return;
      }

      // Call the smart contract function
      const timestamp = Math.floor(Date.now() / 1000); // Unix timestamp
      const tx = await contract.addCrimeReport(hash, timestamp);
      await tx.wait();

      alert("Crime report successfully stored on Ethereum!");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-900 p-8">
      <div className="w-full max-w-2xl mx-auto bg-zinc-800 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6">
          Crime Report Form
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Location of Crime Section */}
          <div>
            <Label htmlFor="crimeLocation" className="text-zinc-400">
              Location of Crime
            </Label>
            <div className="mt-2">
              <Input
                id="crimeLocation"
                type="text"
                placeholder="Enter location of the crime"
                required
                className="bg-zinc-700 border-zinc-600 text-white"
                value={crimeLocation}
                onChange={(e) => setCrimeLocation(e.target.value)}
              />
            </div>
          </div>

          {/* Physical Evidence Caught Section */}
          <div>
            <Label htmlFor="evidenceCaught" className="text-zinc-400">
              Physical Evidence Caught
            </Label>
            <div className="mt-2">
              <Input
                id="evidenceCaught"
                type="text"
                placeholder="Enter details of physical evidence"
                required
                className="bg-zinc-700 border-zinc-600 text-white"
                value={evidenceCaught}
                onChange={(e) => setEvidenceCaught(e.target.value)}
              />
            </div>
          </div>

          {/* Description of Perpetrator Section */}
          <div>
            <Label htmlFor="perpetratorDescription" className="text-zinc-400">
              Description of Perpetrator
            </Label>
            <div className="mt-2">
              <Input
                id="perpetratorDescription"
                type="text"
                placeholder="Enter description of the perpetrator"
                required
                className="bg-zinc-700 border-zinc-600 text-white"
                value={perpetratorDescription}
                onChange={(e) => setPerpetratorDescription(e.target.value)}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>

        {/* Display IPFS Hash */}
        {ipfsHash && (
          <div className="mt-6 text-center">
            <p className="text-cyan-400">Data successfully uploaded to IPFS!</p>
            <p className="text-zinc-400">
              IPFS Hash: <span className="text-white">{ipfsHash}</span>
            </p>
            <a
              href={`https://gateway.pinata.cloud/ipfs/${ipfsHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline"
            >
              View on IPFS
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CrimeReportPage;
