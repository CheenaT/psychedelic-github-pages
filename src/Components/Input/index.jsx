import React from "react";

class Input extends React.Component {
  state = {
    inputValue: ""
  };
  constructor(props) {
    super(props);
    // this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ inputValue: event.target.value });
    console.log(this.state.inputValue);
  }
  render() {
    return (
      <input
        type="text"
        value={this.state.inputValue}
        onChange={this.handleChange}
      />
    );
  }
}

export default Input;
