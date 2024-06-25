'use client'
import React from 'react';

import {  useState, useEffect, createContext, useContext } from 'react';
import { connectToEthereum, initializeContract } from '../components/utils/ethers';
import { useContract } from '../components/context';
// import {Vendorregister} from './vendorregister'
import {Itemlist} from './itemlist'

// const ContractContext = createContext();

// export const useContract = () => useContext(ContractContext);
// console.log(useContract)
// const ContractProvider = ({ children }) => {
//   const [provider, setProvider] = useState(null);
//   const [contract, setContract] = useState(null);

  // useEffect(() => {
  //   async function initialize() {
  //     try {
  //       const ethereumProvider = await connectToEthereum();
  //       setProvider(ethereumProvider);

  //       const contractInstance = await initializeContract(ethereumProvider);
  //       setContract(contractInstance);
  //     } catch (error) {
  //       console.error('Error connecting to Ethereum:', error);
  //     }
  //   }

  //   initialize();
  // }, []);

//   return (
//     <ContractContext.Provider value={{ provider, contract, setContract }}>
//       {children}
//     </ContractContext.Provider>
//   );
// };


const Vendorregister = ({onRegister}) => {

  const [provider, setProvider] = useState(null);
  const [Contract, setContract] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
//   const [register, setregister] = useState(false);
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
      const newcontract = await initializeContract(provider);
      setContract(newcontract)
      setMessage("Registering...")
      const registerfunction = await newcontract.registerVendor(name, email);
      await registerfunction.wait();
      setEmail("")
      setMessage("Transaction successful , You are registered successful")
      setName("")
      onRegister();
    } catch (error) {
      console.log(error);
      setMessage("Transaction Failed, Please try again")
    }
  }
  return (
    <div>
        {/* {`${register === true ? <Vendorregister/>: <Itemlist/>}`} */}
      <div className={`w-[501px] m-auto items-center text-center bg-gradient-to-r from-indigo-400 to-cyan-300 mt-4 border rounded-lg`}>
        <div className=' h-[60px]'>
          <h1 className='text-[30px]'>Vendor Registration</h1>
        </div>
        <div className='m-auto w-[500px] h-[400px] border border-gray-700 rounded-lg'>
          <div className='h-[10%] mt-[60px]'><input className='border border-gray-500 px-2' type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /></div>
          <div className='h-[10%]'><input className='border border-gray-500 px-2' type="email " placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          <div className='h-[10%] mt-8'> <button onClick={handleRegisterVendor} className="p-2 bg-green-700 rounded-lg">Register as Vendor</button></div>
        </div>
        <p>{message}</p>
      </div>
    </div>
  )
}
export default Vendorregister;