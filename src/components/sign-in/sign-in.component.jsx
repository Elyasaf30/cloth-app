import React from "react";

import "./sign-in.styles.scss";

class signIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            onChange={this.handleChange}
            type="email"
            value={this.state.email}
            required
          />
          <label>Email</label>
          <input
            name="password"
            onChange={this.handleChange}
            type="password"
            value={this.state.password}
            required
          />
          <label>password</label>

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default signIn;
