import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("logging", error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return <h1>Something went wrong!</h1>;
    }
    // return <div style={{ color: "red" }}>// something went wrong!!!!!</div>;

    return this.props.children;
  }
}

export default ErrorBoundary;
