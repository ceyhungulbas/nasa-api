import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

const NavbarAsComponent = () => {

    return(
        <div className="Navbar">
            <Navbar bg="light" variant="light">
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Homepage</Nav.Link>
                <Nav.Link as={Link} to="/apod">APOD</Nav.Link>
                <Nav.Link as={Link} to="/mrp">MRP</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavbarAsComponent