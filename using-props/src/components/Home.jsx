import React from 'react'
import { useState } from 'react'
import Layer1 from './Layer1';


function Home() {

    var [pass, setPass] = useState("");
    const [data, setData] = useState("");

    function handleChange(e) {
        setData(e.target.value)
    }

    function handleClick() {
        setPass(data);
    }

    return (
        <div>
            <h1>Props usecase:</h1>

            <hr />

            <div className='inp'>
                <input type="text" onChange={handleChange} value={data} />
                {data !== "" ? <button type='button' onClick={handleClick}>Click this</button> : "Enter Something"}
            </div>
            <hr />

            {pass !== "" ?
                <div>
                    <Layer1 info={pass} />
                </div>
                : ""
            }
        </div>
    )
}

export default Home