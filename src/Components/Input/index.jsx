import React from "react";

class Input extends React.Component {
  state = {
    inputValue: ""
  };
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }
  render() {
    return (
      <div className={this.props.className}>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Input;
