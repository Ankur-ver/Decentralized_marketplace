import React from 'react'
import Listitem from '../components/listitem'
import { useState } from 'react'
export default function Itemlist() {
  const [see, setsee] = useState(false)
  return (
    <div>
      <div className={`w-[30%] bg-green-200 m-auto text-center mt-3 text-green-700 border rounded-lg ${see ? 'hidden' :''}`}>
        <h1>Congratulations! You have successfully registered</h1>
      </div>
      <div className=' w-[30%] flex items-center justify-center m-auto mt-4'>
      <button className='bg-orange-400 border rounded-lg p-2 text-white 'onClick={()=>{setsee(true)}}>Make a list</button>
      </div>
       <Listitem state={see}/>
    </div>
  )
}
