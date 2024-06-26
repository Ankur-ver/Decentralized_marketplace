import { Inter } from "next/font/google";
import Headertop from "./components/headertop";
import Navbar from './components/navbar.js'
import Web3Provider from './components/web3provider'
import App from './components/app'
import "./globals.css";
import { ContractProvider } from "./components/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Web3Provider>
        <ContractProvider>
        <Headertop/>
      <Navbar/>
      {/* <App/>  */}
        {children}
        </ContractProvider>
        </Web3Provider>
      </body>
    
    </html>
  );
}
