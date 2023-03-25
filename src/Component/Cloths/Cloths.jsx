import React, { useEffect } from 'react'
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
// useEffect(() => {
//   fetch('/public/storagedb.json')

//   return () => {
//     second
//   }
// }, [third])

  return (
    <div>
        <h1>cloths</h1>
  <ul>
    {
  Garments.map((item,index)=>
<Display name={item.name} price={item.price} id={item.id} key={index}/>  
  )
    }
  </ul>

    </div>
  )
}
