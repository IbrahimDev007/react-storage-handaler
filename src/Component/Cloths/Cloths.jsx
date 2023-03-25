import React, { useState,useEffect } from 'react'
import Display from '../../Display'

//import with relative path


export default function Cloths() {
    //use db as a array
//  const Garments=[
//     {id:1,name:'shirt',price:1290},
//     {id:2,name:'pant',price:1330},
//     {id:3,name:'shocks',price:290},
//     {id:4,name:'t-shirt',price:690}
//  ]
const [data, setData] = useState([]);
useEffect(() => {
  fetch('/storagedb.json')
.then(res=>res.json())
.then(datas=>setData(datas))

}, [])

  return (
    <div>
        <h1>cloths</h1>
  <ul>
    {
 data && data.map((item,index)=>
<Display name={item.name} price={item.age} id={item.id} key={index}/>  
  )
    }
  </ul>

    </div>
  )
}
