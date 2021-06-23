import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const togglePass = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  //password visibility
  const [passwordShown, setPasswordShown] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log("Password do NOT match");
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Login</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign into Your Account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            required
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            required
            onChange={(e) => onChange(e)}
          />

          <i onClick={togglePass} style={{ cursor: "pointer" }}>
            {passwordShown === false ? (
              <span className="material-icons">visibility</span>
            ) : (
              <span className="material-icons">visibility_off</span>
            )}
          </i>
        </div>

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/Register">Sign up</Link>
      </p>
    </Fragment>
  );
};

export default Login;