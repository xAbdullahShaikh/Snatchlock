// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CrimeRegistry {
    struct CrimeReport {
        string ipfsHash; // IPFS hash of the crime data
        string timestamp; // Date and time of crime
        address reporter; // Address of the person reporting
    }

    mapping(uint256 => CrimeReport) public reports;
    uint256 public reportCount;

    event CrimeReported(uint256 reportId, string ipfsHash, string timestamp, address reporter);

    // Function to add a new crime report
    function addCrimeReport(string memory _ipfsHash, string memory _timestamp) public {
        reportCount++;
        reports[reportCount] = CrimeReport({
            ipfsHash: _ipfsHash,
            timestamp: _timestamp,
            reporter: msg.sender
        });

        emit CrimeReported(reportCount, _ipfsHash, _timestamp, msg.sender);
    }

    // Function to retrieve a report by ID
    function getCrimeReport(uint256 _reportId) public view returns (string memory, string memory, address) {
        CrimeReport memory report = reports[_reportId];
        return (report.ipfsHash, report.timestamp, report.reporter);
    }
}
