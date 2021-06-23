import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const togglePass = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const togglePass2 = () => {
    setPassword2Shown(password2Shown ? false : true);
  };

  //password visibility
  const [passwordShown, setPasswordShown] = useState(false);
  const [password2Shown, setPassword2Shown] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            required
            onChange={(e) => onChange(e)}
          />
        </div>
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
        <div className="form-group">
          <input
            type={password2Shown ? "text" : "password"}
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            required
            onChange={(e) => onChange(e)}
          />
          <i onClick={togglePass2} style={{ cursor: "pointer" }}>
            {password2Shown === false ? (
              <span className="material-icons">visibility</span>
            ) : (
              <span className="material-icons">visibility_off</span>
            )}
          </i>
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/">Login</Link>
      </p>
    </Fragment>
  );
};



export default Register;
