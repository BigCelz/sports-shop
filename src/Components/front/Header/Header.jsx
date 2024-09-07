import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useCart } from "react-use-cart";


const Header = () => {
  const {totalItems} = useCart();
  return (
    <div className="header">
      <Navbar expand="lg" className="">
        <Container>
          <Link to="/" className="nav-link">
            <Navbar.Brand href="#" className="logo">
              Jersey World
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="navbarScroll" className="nav-toggler" />
          <Navbar.Collapse id="navbarScroll" className="nav-collapse">
            <Nav
              className="mx-auto my-2 my-lg-0 nav-links"
            >
              <Link to="/" className="nav-link">
                <Nav.Link href="#action1" className="nav-link">Shop</Nav.Link>
              </Link>

              <Link to="/blog" className="nav-link">
                <Nav.Link href="#action1"  className="nav-link">blog</Nav.Link>
              </Link>
            </Nav>

            <div className="cart-icon d-flex">
              <div className="d-flex">
              <Link to="/cart">
                <i class="fa-solid fa-cart-shopping"></i>
              </Link>
              <div className="count">{totalItems}</div>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
