import React, { useState } from 'react';

function Counter() {
  const [counter, setCount] = useState(0);

  const add = () => { //when called it increments the counter by one
    setCount(counter + 1);
  };

  const divStyle = { //div styling
    width: "50vw",
    height: "50vh",
    backgroundColor: "lightgreen",
    position: "absolute",
    left: "25vw",
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    overflow: "scroll"
  }
  const buttonStyle = { //button styling
    backgroundColor: "orange",
    borderRadius: "5px",
    border: "none",
    height: "50px",
    width: "50px",
    marginTop: "10px",
  }

  return ( // here the counter gets displayed in a p tag and on the button click the add function gets called
    <div style={divStyle}>
      <p>Count: {counter}</p>
      <button style={buttonStyle} onClick={add}>+</button>
    </div>
  );
}

export default Counter;