import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };
  username = React.createRef();

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  // componentDidMount() {
  //   this.username.current.focus();
  // }

  validateProperty = ({ name, value }) => {
    console.log(name);
    if (name === "username") {
      if (value === "") return "Username is required";
    }

    if (name === "password") {
      if (value === "") return "Password is required";
    }
  };

  validate = () => {
    const options = { abortEarly: false };
    // const { error } = Joi.validate(this.state.account, this.schema, {
    //   abortEarly: false,
    // });
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
    console.log("submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    console.log(errorMessage);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
