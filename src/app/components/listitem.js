import React, { useState } from 'react'
import { useContract } from './context'

export default function Listitem({state}) {
    const {contract} =useContract();
    // console.log(state);
    const [name,setname] =useState('');
    const [discription,setdiscription] =useState('');
    const [price,setprice] =useState('');
    const [wait,setwait] =useState("")
    const item=async()=>{
   try {
        if(contract){
         
         const inputitem= await contract.ListItem(name,discription,price);
         console.log(inputitem);
             console.log("hello")
             setwait('');
             setname('')
             setdiscription('')
             setprice('')
         
        }
   } catch (error) {
      setwait('')
   }
    }
    const handlelistproduct =()=>{
        setwait('Loading Metamask...')
            item();
    }

   
  return (
    <>
    <div className={`m-auto mt-3 w-[500px] h-[300px] border border-green-700 rounded-lg bg-green-300 ${state ? 'block': 'hidden'}`}>
          <div className=' mt-3'>
            <h1 className=' font-bold text-center'>Mention Product</h1>
            <div className='h-[2px] bg-black mt-2 '></div>
          </div>
          <div className='w-[80%] m-auto flex  justify-center items-center'>
            <label className='mt-2' for ="product"> Name : </label>
            <input className="ml-2 mt-3 border rounded pl-2" name="Name" value={name} onChange={(e)=>setname(e.target.value)} type="text"/>
          </div>
          <div className='w-[80%] m-auto ml-8 flex  justify-center items-center'>
            <label className='mt-2' for ="product">Disciption :</label>
            <input className="ml-2 mt-3 border rounded pl-2" name="Discription" value={discription} onChange={(e)=>setdiscription(e.target.value)} type="text"/>
          </div>
          <div className='w-[80%] m-auto flex  justify-center items-center'>
            <label className='mt-2' for ="product"> Price :</label>
            <input className="ml-2 mt-3 border rounded pl-2" name="price" value={price} onChange={(e)=>setprice(e.target.value)} type="text"/>
          </div>
          <div className='flex justify-center mt-7'>
            <button className='bg-blue-500 p-2 border rounded-lg text-white' onClick={handlelistproduct}>List Product</button>
          </div>
          <p className='text-center'>{wait}</p>
    </div>
    </>
  )
}
