import React, { useState } from 'react'

const Hw = () => {
    const [msg, setMsg] = useState("Show/Hide")
    const showHide = () => msg ? setMsg("") : setMsg(<h1>Show/Hide</h1>)
    const [userName, setUserName] = useState(null)
    return (
        <div>
            {userName}
            <div style={{ color: 'red' }}> {msg}</div>
            <button onClick={() => showHide()}>Test</button>
            <input onChange={(e) => setUserName(e.target.value)}></input>

        </div>
    )
}

export default Hw