const { error } = require("console");
const { ethers } = require("ethers")

const fs = require ('fs');


async function main(){
    const [deployer] = await ethers.getSigners();
    
    
    console.log('Deploying contracts with the account:' , deployer.address);
    
    const SimpleStorage = await ethers.getContractFactory('SimpleStorage');
    const simpleStorage = await SimpleStorage.deploy();
    
    console.log('SimpleStorage address :' , simpleStorage.deploy);
    
    //saving contract address to a JSON file;
    
    fs.writeFileSync('contract-address.json' , JSON.stringify({address:simpleStorage.address}));
    
    
    console.log('contract address saved to contract-address.json');
}

main().then( ()=> process.exit(0)).catch(error => {
    console.log(error);
    process.exit(1);
});