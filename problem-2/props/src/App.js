import React from 'react';


const Message = (props) => {
  return <p>{props.message}</p>;
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Enter your message above',
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  render() {
    return (
      <div style={divStyle}>
        <input type="text" onChange={this.handleChange} />
        <Message message={this.state.message} />
      </div>
    );
  }
}

export default App;
