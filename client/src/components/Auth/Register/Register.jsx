import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import classNames from "classnames";
import { connect, useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../redux/actions/authActions";
import classnames from "classnames";

const Register = (props) => {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.error.error);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, errors] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
      password2,
    };

    dispatch(registerUser(newUser));

    const errorDisplay = error ? console.log(error) : null;
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
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="confirm password"
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
            />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit" onClick={onSubmit}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default connect(null, { registerUser })(Register);
