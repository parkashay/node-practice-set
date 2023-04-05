import React, { useState } from 'react'
import Layer3 from './Layer3';

function Layer2(props) {
    const depth = 2;
    const [data, setData] = useState("");
    const [pass, setPass] = useState("");

    function handleChange(e) {
        setData(e.target.value);
    }

    function handleClick() {
        setPass(data);
    }


    return (
        <>
            <div className="layerContent">
                <p>Props passed to depth: {depth} <br /> {props.first}</p>
                <p>Props passed to depth : {depth - 1}<br /> {props.info}</p>

                {props.info !== "" ? <div className="inp">
                    <input type="text" onChange={handleChange} value={data} />
                    {data !== "" ? <button type='button' onClick={handleClick}>Click</button> : ""}
                </div> : ""}

            </div>

            {pass !== "" ? <Layer3 info={pass} second={props.info} first={props.first} /> : ""}


        </>
    )
}

export default Layer2