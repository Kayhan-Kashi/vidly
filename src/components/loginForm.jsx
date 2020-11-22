import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };
  username = React.createRef();

  // componentDidMount() {
  //   this.username.current.focus();
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              value={account.username}
              onChange={this.handleChange}
              name="username"
              ref={this.username}
              class="form-control"
              id="username"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              class="form-control"
              name="password"
              id="password"
              value={account.password}
              onChange={this.handleChange}
              type="text"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
