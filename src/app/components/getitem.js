import React, { useState ,useEffect } from 'react'
import { ethers } from 'ethers';
import { useContract } from './context'
export default function Getitem() {
    const { contract } = useContract();
    const [see, setsee] = useState([]);
    const [price, setprice] = useState('');
    const [message,setmessage] =useState('')
    const [sold,setsold] =useState([])
    const [vendor, setvendor] = useState([
        {
            name: null,
            email: null,
        }
    ]);
    const [data, setdata] = useState(
        [
        {
            name: "",
            priceInwei: "",
            discription: "",
        }
    ]
)
    
    const getitem = async () => {
        if (contract) {
            const getdata = await contract.getAllItems();
            //   console.log(getdata);
            const getAllVendor = await contract.getAllVendors();
             console.log(getdata[1].isSold)
             const soldItems = getdata.map(item => item.isSold);
             setsold(soldItems)
             console.log(soldItems);
            //   console.log("solditem",solditems);
            //   setsold(solditems)
            //  console.log("itemid", BigInt(getdata[0].itemId).toString())
            setvendor(getAllVendor);
            setdata(getdata);
            setsee(new Array(getdata.length).fill(false));
            console.log("price",getdata[0].priceInwei)
            const weivalue=(BigInt(getdata[0].priceInwei))
            const ethervalue=ethers.formatEther(weivalue.toString());
            // console.log(ethervalue)
            setprice(ethervalue)
            // setprice(getdata[0].priceInwei)
            // console.log("data",getAllVendor[0].itemIds)
        }

    }
    const buyproduct=async(oldindex)=>{
        if(contract){
            const index = BigInt(oldindex).toString()
            console.log("index",index)
            const weivalue=BigInt(data[index-1].priceInwei)
            const ethervalue=ethers.formatEther(weivalue.toString());
            const amount = ethers.parseEther(ethervalue.toString()); 
                const transaction = await contract.buyItem(index, { value: amount });
                console.log(
                    transaction
                )
               const issold=[...sold];
               issold[index-1]= true;
                setsold(issold)
                await transaction.wait();
                console.log("Transaction is done");
                setmessage("Transaction done..")
        }
    }
    useEffect(() => {
        getitem();
      }, [contract]); // Only re-run the effect if contract changes
    
    // const handlebuyproduct=(index)=>{
    //           buyproduct(index);
    // }
    const handleseeowner=(index)=>{
             const updatedsee = [...see];
             updatedsee[index] = !updatedsee[index];
             setsee(updatedsee);
    }
    const convertWeiToEther = (weiValue) => {
        return Number(weiValue) / 1e18;
      };
      const convertdata=(id)=>{
            const value= BigInt(id.toString())
            // console.log(value)
            return value;
      }

    return (
        <> 
       {/* <h1>{data}</h1> */}
        <div className='flex  p-2 w-[1000px] m-auto h-[570px] flex-wrap'>
        
            {data.map((item, index)=>(
                   <div key={index} className='w-[300px] bg-orange-400 h-[256px] border rounded-lg ml-4 p-3 box-border mt-2'>
                   <div>
                       <div className='bg-blue-600 border rounded-lg'>
                       
                          <div className='bg-blue- w-full text-center'>
                           <h2 ><b>Product Name: </b>{item.name}</h2>
                          </div>
                          <div className='bg-blue- w-full text-center'>
                           <h2  ><b>Discription:</b> {item.discription}</h2>
                          </div>
                          <div className='bg-blue- w-full text-center'>
                           <h2><b>Price: </b>{convertWeiToEther(item.priceInwei)} ETH</h2>
                          </div>
                       </div>
                       <div className="flex justify-center  "> 
                            <button className={`  mt-2 bg-green-500 border rounded-lg p-1 ${see[index] ? 'hidden' : " "}`} onClick={() => handleseeowner(index)}>See Owner</button>
                            </div>
                          
                       <br></br>
                       <div className={`bg-red-400 h-[60px] pl-4  box-border ${see[index] ? '' : "hidden"}`}>
                           <h1><b>Name: </b>{vendor[index]?.name}</h1>
                           <h1><b>Email:</b>{vendor[index]?.email}</h1>
                       </div>
                   </div>
   
                   <div className=' flex justify-center pb-2 '>
                       <button className={`m-auto bg-blue-500  p-1 border rounded-lg mt-3 pl-3 pr-2 text-white ${sold[index] ? 'hidden': ''}`} onClick={()=>buyproduct(convertdata(item.itemId))}>Buy</button>
                   </div>
                   <div className={`text-center font-extrabold ${sold[index] ? ' ': 'hidden'}`}>
                       <h1>Selled</h1>
                   </div>
   
               </div>
            ))}
        </div>
         

        </>
    )
}
