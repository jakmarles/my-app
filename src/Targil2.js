import React from "react";

const Targil2 = () => {
  const [number1, setNumber1] = React.useState(0);
  const [number2, setNumber2] = React.useState(0);
  const [res, setRes] = React.useState(number1 + number2);
  const EqualTo = () => {
    setRes(Number(number1) + Number(number2));
  };

  return (
    <div>
      <input
        placeholder="0"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      ></input>
      +
      <input
        placeholder="0"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      ></input>
      <br />
      <button onClick={() => EqualTo()}>Res</button>
      <h2>{res}</h2>
    </div>
  );
};

export default Targil2;
