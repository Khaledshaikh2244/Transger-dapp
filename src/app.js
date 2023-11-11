// app.js
const { ethers } = require('ethers');
const fs = require('fs');

async function connectToContract() {
    // Load contract address from JSON file
    const contractAddress = JSON.parse(fs.readFileSync('contract-address.json').toString()).address;

    const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
    const signer = new ethers.Wallet('YOUR_PRIVATE_KEY', provider); // Replace with your private key

    const SimpleStorage = await ethers.getContractFactory('SimpleStorage');
    return SimpleStorage.attach(contractAddress).connect(signer);
}

async function setData() {
    const contract = await connectToContract();
    const dataInput = document.getElementById('dataInput').value;
    await contract.setData(dataInput);
    console.log('Data set successfully');
}

async function getData() {
    const contract = await connectToContract();
    const data = await contract.getData();
    document.getElementById('output').innerText = `Data: ${data}`;
}
