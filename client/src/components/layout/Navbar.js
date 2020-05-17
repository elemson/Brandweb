import React from "react";
import { Navbar, Nav } from "react-bootstrap";
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
    <Nav>
      <Nav.Link href="" onClick={onLogoutClick}>
        Logout
      </Nav.Link>
      <Nav.Link>Profile</Nav.Link>
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
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        {" "}
        <Link to="/">Brandweb</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {auth ? authLinks : guestLinks}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(Navigation);
