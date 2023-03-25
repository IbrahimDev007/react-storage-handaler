import React from 'react'

export default function Display(props) {
  return (
    <div style={{textAlign:'center'}}>
    <h4>{props.name}</h4>
    <h4>{props.price}</h4>
    <h4>{props.id}</h4>
    <button>Add cart</button>
    </div>
  )
}
