'use client'


import { useEffect, useState } from 'react'
import { useContract } from './context';
import Getitem from './getitem';
import Vendorlist from './vendorlist';
export default function Vendors() {
  const { contract } = useContract();
  const [contractReady, setContractReady] = useState(false);

  useEffect(() => {
    const getvendor = async () => {
      if (contract) {
        const getAllVendor = await contract.getAllVendors();
        console.log(getAllVendor)
        setContractReady(true);
        // setdata(getAllVendor);
      }
    }
    getvendor();
  }, [contract])
  return (
    <>

      <div className='h-[900px] bg-blue-500'>
        <div className='h-[50px] m-auto  text-center py-2 '><h1 className='text-[30px] tet-center font-bold '>Vendors</h1></div>
      
        <div>
         {contractReady ? <Getitem/> : <Vendorlist/>}
        </div >
      
      </div>
    </>

  )
}
