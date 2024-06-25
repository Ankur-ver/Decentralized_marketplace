// App.js
import React from 'react';
import { ContractProvider } from './context'; // Adjust the path as needed
import { useContract } from './context';
// import Registervendor from '../register/page.js';
// import Vendors from './vendors';
    
const App = () => {
  // const {contract}=useContract();
  return (
   <> <div className="flex">
   <div className="w-[50%] bg-red-300 h-[800px]">
     <h1 className="font-bold text-[200px] ml-[100px] text-gray-800 mt-10">Transparent</h1>
   </div>
   <div className="w-[50%]">
     <h1 className="font-bold text-[200px] -ml-[450px] mt-[400px] text-gray-800">Marketplace</h1>
   </div>
 </div></>
  );
};

export default App;
