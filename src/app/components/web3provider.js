'use client'

import React, { createContext, useEffect, useState } from 'react'
import {ethers} from 'ethers';
import abi from '../contracts/market.json'
import detectEthereumProvider from '@metamask/detect-provider'
export  const Web3Context = createContext();
 const Web3Provider=({children})=> {
    
    const [provider,setprovider]=useState(null);
    const [signer,setsigner]=useState(null);
    const [account,setaccount]=useState(null);
    const [contract,setcontract]=useState(null);
    useEffect(()=>{
          const connectwallet= async()=>{
          
            if(window.ethereum){
                const ethersProvider = new ethers.BrowserProvider(window.ethereum);
                setprovider(ethersProvider);
                
                const ethersSigner=ethersProvider.getSigner();
                setsigner(ethersSigner);
                const accounts = await ethersProvider.send('eth_requestAccounts',[]);
                const contractInstance=new ethers.Contract('0x1a6B58451616554C5b6D2240ef983e8215ee4f5F',abi,ethersSigner)
                setcontract(contractInstance);
                setaccount(accounts[0]);
            }else{
              console.log("Please intall metamask")
            }
          }
          connectwallet();
    },[])
  return (
    <Web3Context.Provider value={{provider, signer, account,contract}}>
        {children}
    </Web3Context.Provider>
  )
}
export default Web3Provider
