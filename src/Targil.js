import React from 'react'

const Targil = () => {
  const colors = ['red', 'green', 'blue', 'white']
  const [bgColor, setBgColor] = React.useState('white')
  const onClickHnadler = () => document.body.style.backgroundColor = bgColor
  
  

  return (
    <div >
      <select id="background" onChange={(e) => setBgColor(e.target.value)}>
        {
          colors.map(color =>
            <option value={color} key={color}> {color} </option>
          )
        }
      </select>
      <button onClick={onClickHnadler}>Set bg color</button>
    </div>
  )
}

export default Targil