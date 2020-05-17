import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../redux/actions/authActions";

const Register = ({ history }) => {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.error);

  console.log(error);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
      password2,
    };

    dispatch(registerUser(newUser, history));
  };

  return (
    <div>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              className={classnames("form-control form-control-lg", {
                "is-invalid": error.name,
              })}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            {error.name && <div className="invalid-feedback">{error.name}</div>}
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className={classnames("form-control form-control-lg", {
                "is-invalid": error.email,
              })}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {error.email && (
              <div className="invalid-feedback">{error.email}</div>
            )}
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className={classnames("form-control form-control-lg", {
                "is-invalid": error.password,
              })}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {error.password && (
              <div className="invalid-feedback">{error.password}</div>
            )}
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label> Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="confirm password"
              className={classnames("form-control form-control-lg", {
                "is-invalid": error.password2,
              })}
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
            />
            {error.password2 && (
              <div className="invalid-feedback">{error.password2}</div>
            )}
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit" onClick={onSubmit}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default withRouter(Register);
