import React, { useState } from 'react'

const Hw = () => {
    // const [readval, write method] = useState(init value)
    const [msg, setMsg] = useState("Show/Hide")
    const showHide = () => {
        // msg? setMsg(""):setMsg("Show/Hide")
        if (msg){
        setMsg("")
        }else{
            setMsg("Show/Hide")
        }
    }

    return (
        <div>

            <div style={{color:'red'}}> {msg}</div>
            <button onClick={() => showHide()}>Test</button>

        </div>
    )
}

export default Hw