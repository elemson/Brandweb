import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { logoutUser } from "../../redux/actions/authActions";
import { useSelector, useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";

function Navigation({ history }) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);

  const onLogoutClick = (e) => {
    e.preventDefault();
    dispatch(logoutUser(history));
  };

  const authLinks = (
    <Nav className="mr-auto">
      <Nav.Link onClick={onLogoutClick}>Logout</Nav.Link>
    </Nav>
  );

  const guestLinks = (
    <Nav>
      <Nav.Link>
        {" "}
        <Link to="/register">SignUp</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/">Login</Link>
      </Nav.Link>
    </Nav>
  );

  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand className="mr-auto">
          <Link to="/">
            {" "}
            <img
              alt=""
              src="https://et.brandweb.agency/wp-content/themes/brandwebagency/library/img/brand/Brandweb-logo.png"
              className="d-inline-block align-top"
            />
          </Link>
        </Navbar.Brand>

        <Form inline>{auth ? authLinks : guestLinks}</Form>
      </Navbar>
    </>
  );
}

export default withRouter(Navigation);
