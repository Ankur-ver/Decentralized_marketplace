'use client'
import React from 'react';

import {  useState, useEffect,createContext, useContext } from 'react';
import { connectToEthereum, initializeContract } from '../components/utils/ethers';

const ContractContext = createContext();

export const useContract = () => useContext(ContractContext);
const Registervendor = ({children}) => {
  const [provider, setProvider] = useState(null);
  const [Contract, setContract] = useState(null);
  useEffect(() => {
    async function initialize() {
      try {
        const ethereumProvider = await connectToEthereum();
        setProvider(ethereumProvider);
        // setContract(smartContract);
      } catch (error) {
        console.error('Error connecting to Ethereum:', error);
      }
    }

    initialize();
  }, []);
  const handleRegisterVendor = async (e) => {
    try {
      const contract = await initializeContract(provider);
      setContract(contract)
      const registerfunction = await contract.registerVendor(name, email);
      await registerfunction.wait();
      setEmail("")
      setMessage("Transaction successful , You are registered successful")
      setName("")


    } catch (error) {
      console.log(error);
      setMessage("Transaction Failed, Please try again")
    }
  }
  return (
    <ContractContext.Provider value={{ provider, Contract }}>
    {children}
  </ContractContext.Provider>

  )
}
export default Registervendor;