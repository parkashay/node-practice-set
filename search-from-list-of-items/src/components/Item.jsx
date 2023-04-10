import React from 'react'

function Item(props) {

   
  return (
   <>
    {props.items.map(item => {return <div key={Math.random()}>{item}</div>})}
   </>
  )
}

export default Item