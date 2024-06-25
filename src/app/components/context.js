// context/ContractContext.js

'use client';
import React, { createContext, useState, useEffect, useContext } from 'react';
import { connectToEthereum, initializeContract } from './utils/ethers';

const ContractContext = createContext();

export const useContract = () => {
  return useContext(ContractContext);
};
export const ContractProvider = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    async function initialize() {
      try {
        const ethereumProvider = await connectToEthereum();
        setProvider(ethereumProvider);

        const contractInstance = await initializeContract(ethereumProvider);
        setContract(contractInstance);
      } catch (error) {
        console.error('Error connecting to Ethereum:', error);
      }
    }

    initialize();
  }, []);

  return (
    <ContractContext.Provider value={{ provider, contract, setContract }}>
      {children}
    </ContractContext.Provider>
  );
};
