import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './Logo.png';
import { Instagram,Sunglasses,Eyeglasses,GeoAltFill, Fire,EyeFill,PhoneFill,EnvelopeFill } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import './NavbarHeader.css';
import {Img} from 'react-image';
import { MdPanoramaFishEye} from "react-icons/md";

  export const NavbarHeader = () =>{
    return(
        <div>
            <Navbar collapseOnSelect expand="lg"  className="navbar" fixed="top" variant='dark'  >
    <Container>
    <Navbar.Brand as={Link} to={"/"}><Img src={logo} height="43px" width="43px" alt="img"/></Navbar.Brand>
        <Navbar.Brand as={Link} to={"/"}><h4><b>Good Sight Opticians</b></h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
         </Nav>
        <Nav>  
        <Nav.Link as={Link} to={"/SunGlasses"} className="nav-link"><Sunglasses/>SunGlasses</Nav.Link>
        <Nav.Link as={Link} to={"/EyeGlasses"} className="nav-link"><Eyeglasses/>EyeGlasses</Nav.Link>
        <Nav.Link as={Link} to={"/ContactLenses"} className="nav-link"><EyeFill/>ContactLenses</Nav.Link>
        <Nav.Link as={Link} to={"/Lenses"} className="nav-link" ><MdPanoramaFishEye/>Lenses</Nav.Link>
        <Nav.Link  as={Link} to={"/StoreLocator"} className="nav-link"><GeoAltFill/>StoreLocator</Nav.Link>
          <Nav.Link as={Link} to={"/About"} className="nav-link"><PhoneFill/>About</Nav.Link>
          <Nav.Link as={Link} to={"/Services"} className="nav-link"><EyeFill/>Services</Nav.Link>
          <Nav.Link  className="nav-link" as={Link} to={"mailto:goodsight154@gmail.com"}>
          <a href="mailto:goodsight154@gmail.com" className='mail'><EnvelopeFill/>goodsight154@gmail.com</a>
          </Nav.Link>
          <Nav.Link as={Link} to={"https://www.instagram.com/good_sight_opticians/"} className="nav-link">
          <a href="https://www.instagram.com/good_sight_opticians/" className='mail'> <Instagram/></a>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

        </div>
    )
}

export default NavbarHeader;