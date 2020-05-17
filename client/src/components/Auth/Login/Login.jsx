import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { loginUser } from "../../../redux/actions/authActions";
import { withRouter, Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

function Login({ history }) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const auth = useSelector((state) => state.auth.isAuthenticated);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (auth) {
    return <Redirect to="/profile" />;
  }
  console.log(error);

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    dispatch(loginUser(userData));
  };

  const errors = error ? (
    <Form.Text className="text-muted">{error}</Form.Text>
  ) : null;

  return (
    <>
      <div class="container">
        <div class="text-center">
          <h2>Please Sign In </h2>
          <div classnames="invalid-feedback is-invalid">{errors}</div>
        </div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <button
            class="btn btn-lg btn-primary btn-block"
            type="submit"
            onClick={onSubmit}
          >
            Sign in
          </button>
          {/* <div class="text-center">
            <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
          </div> */}
        </Form>
      </div>
    </>
  );
}
export default withRouter(Login);
