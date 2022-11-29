import React from "react";

const studant = [
  {
    Name: "Mr.Ilya",
    Age: 25,
    City: "TelAviv",
  },
  {
    Name: "Elay",
    Age: 35,
    City: "GaneiTikva",
  },
];

const Targil3 = () => {
  const message = () => {
    console.log("Info pressed");
  };
  return (
    <div>
      {studant.map((item, i) => (
        <div class="card">
          <div class="container">
            <img src={`https://picsum.photos/200/300`} alt="Pic" />
            <h2>
              <b>{item.Name}</b>
            </h2>
            <p>Age: {item.Age}</p>
            <p>City: {item.City}</p>
            <button class="button" onClick={() => message()}>
              Info
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Targil3;
