// import Image from "next/image";
// import abi from './contracts/market.json';
import Vendors from "./components/vendors";
// import { Web3Context } from './components/web3provider';
// import { useContext } from "react";
// import Navbar from './components/navbar';
// import { useContract, ContractProvider } from "./components/context";
// import Registervendor from "./register/page";

// console.log(Registervendor);
// console.log("contract provider");

// export default function Home() {
//   const { contract } = useContract();

//   return (
//     <div className="App">
//       <div className="flex">
//         <div className="w-[50%] bg-red-300 h-[800px]">
//           <h1 className="font-bold text-[200px] ml-[100px] text-gray-800 mt-10">Transparent</h1>
//         </div>
//         <div className="w-[50%]">
//           <h1 className="font-bold text-[200px] -ml-[450px] mt-[400px] text-gray-800">Marketplace</h1>
//         </div>
//       </div>
//       <Vendors />
//     </div>
//   );
// }

// // In your app entry point, wrap the Home component with ContractProvider
// function App() {
//   return (
//     <ContractProvider>
//       <Home />
//     </ContractProvider>
//   );
// }

// export default App;
import React from 'react';
import App from './components/app';

export default function HomePage() {
  return (
    <>
     <App />
     <Vendors/>
    </>
   
  );
}
