import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const divStyle = {
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
  const buttonStyle = {
    backgroundColor: "orange",
    borderRadius: "5px",
    border: "none",
    height: "50px",
    width: "50px",
    marginTop: "10px",
  }

  return (
    <div style={divStyle}>
      <p>Count: {count}</p>
      <button style={buttonStyle} onClick={add}>+</button>
    </div>
  );
}

export default Counter;