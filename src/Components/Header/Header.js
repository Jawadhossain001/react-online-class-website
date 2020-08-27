import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import '../../bootstrap.min.css'
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#course-academy">Course Academy</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#programs">Programs</Nav.Link>
          <Nav.Link href="#careers">Careers</Nav.Link>
          <Nav.Link href="#for-enterprise">For Enterprise</Nav.Link>
          
        </Nav>
        <Form inline>
          <Nav.Link href="#sign-in">Sign In</Nav.Link>
          <FormControl type="text" placeholder="Search var" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default Header;
