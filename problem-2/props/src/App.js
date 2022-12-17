import React from 'react';


const Message = (props) => {
  return <p>{props.message}</p>;
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

class App extends React.Component {
  constructor(props) { //this is where the message is stored this has a default message that gets changed by messageChanged funciton when user starts typing in input field
    super(props);
    this.state = {
      message: 'Enter your message above',
    };
  }

  messageChanged = (event) => { //this is where it waits for the message to be changed and then sends it to the prop
    this.setState({
      message: event.target.value,
    });
  };

  render() { //this is where the message gets displayed here it assigns the event above to an input field which listens 
    return (
      <div style={divStyle}>
        <input type="text" onChange={this.messageChanged} /> 
        <Message message={this.state.message} />
      </div>
    );
  }
}

export default App;
