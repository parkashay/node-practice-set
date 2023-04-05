import React, { useState } from 'react'
import Layer2 from './Layer2';


function Layer1(props) {
    const [pass, setPass] = useState("");
    const [data, setData] = useState("");
    const prevPass = props.info;
    const depth = 1;

    function handleClick() {
        setPass(data)
    }
    function handleChange(e) {
        setData(e.target.value);
    }

    return (
        <>

            <div className='layerContent'>
                <p>Props passed to depth: {depth} <br />{prevPass}</p>


                {prevPass !== "" ?
                    <div className="inp">
                        <input type="text" onChange={handleChange} value={data} />
                        {data !== "" ? <button type='button' onClick={handleClick}>Click</button> : ""}
                    </div>
                    : ""
                }
            </div>
            {pass !== "" ? <Layer2 info={pass} first={prevPass} /> : ""}
        </>


    )
}

export default Layer1