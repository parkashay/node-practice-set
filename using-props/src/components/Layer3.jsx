import React from 'react'

function Layer3(props) {
    const depth = 3;

   

  return (
    <>
    <div className="layerContent">
        <p>Props passed to depth: {depth} <br /> {props.first} </p>
        <p>Props passed to depth: {depth-1} <br /> {props.second} </p>
        <p>Props passed to depth: {depth-2} <br /> {props.info} </p>

        <button type='button' onClick={()=>{window.location.reload()}}>RESET</button>
    </div>
        
    </>
  )
}

export default Layer3