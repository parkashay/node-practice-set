import React, { useState } from 'react'
import Item from './Item';

function Items(props) {

 

  return (
    
    <div className='items'>
    <Item items={props.items}/>
    </div>
  )
}

export default Items