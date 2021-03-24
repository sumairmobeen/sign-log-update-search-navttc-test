import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import images from '../images/logo.png';
const Header = () => {
  return (
    <Navbar bg="blue" variant="dark" className="navbar  bg-info">
      <img src={images}  width="80px" height="50px"/>  
      <Navbar.Brand as={Link} to="/">
        Computer World
      </Navbar.Brand>
      <Nav className="navbar  ">

        <Nav.Link as={Link} to="/register">
          Register
        </Nav.Link>    
                 <Nav.Link as={Link} to="/login">
          Login
          </Nav.Link>
         <Nav.Link as={Link} to="/users">
          Users
        </Nav.Link>
        <Nav.Link as={Link} to="/addpost">
          New Post
        </Nav.Link>
        <Nav.Link as={Link} to="/posts">
          Posts
        </Nav.Link>
   

       



      </Nav>
    </Navbar>
  );
};

export default Header;
