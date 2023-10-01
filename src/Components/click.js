import React, { Component } from "react";
import "./component.css";
export class click extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: "Subscribe",
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  change = () => {
    if (this.message === "Subscribed") {
      this.setState({ message: (this.message = "Subscribe") });
    } else {
      this.setState({ message: (this.message = "Subscribed") });
    }
  };
  render() {
    return (
      <div>
        <button className="btn" onClick={this.change}>
          <b>{this.state.message}</b>
        </button>
      </div>
    );
  }
}
export default click;
