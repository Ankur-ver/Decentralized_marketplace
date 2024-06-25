// utils/ethers.js

import { ethers } from 'ethers';
import contractAbi from '../../contracts/market.json'; 
export async function connectToEthereum() {
    await window.ethereum.enable(); // Request user permission to connect if not already connected
    const provider = new ethers.BrowserProvider(window.ethereum);
    return provider;
}

export async function initializeContract(provider) {
    const contractAddress = '0x1a6B58451616554C5b6D2240ef983e8215ee4f5F';
    console.log(provider.getSigner());
       const signer=await provider.getSigner();
   
    const contract = new ethers.Contract(contractAddress, contractAbi, signer );
    return contract;
}
