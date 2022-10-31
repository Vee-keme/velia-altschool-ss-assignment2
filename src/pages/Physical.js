import React, { Component } from "react";

class Physical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      textarea: "",
      disabled: true,
    };
  }
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
      disabled: false,
    });
  };
  handleTextareaChange = (e) => {
    this.setState({
      textarea: e.target.value,
    });
  };
  render() {
    if (this.state.length > 1) {
      this.setState({
        disabled: false,
      });
    }

    return (
      <div className="Physical">
        <h1>Send Me An Email</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleEmailChange}
            required
          />

          <label>Comments</label>
          <textarea
            type="textarea"
            value={this.state.textarea}
            onChange={this.handleTextareaChange}
            required
          ></textarea>

          <button type="submit" disabled={this.state.disabled}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Physical;
