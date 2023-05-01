import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link  } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><NavLink to="/" className={`text-white text-decoration-none`}>Chef Table BD</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink to="/" style={{margin : '0 8px', textDecoration : 'none',}} className={({isActive}) => isActive ? 'text-warning fw-bold' : 'text-white'}>Home</NavLink>
                        <NavLink to="/feature" style={{margin : '0 8px', textDecoration : 'none',}} className={({isActive}) => isActive ? 'text-warning fw-bold' : 'text-white'}>Feature</NavLink>
                       <NavLink to="/lala" style={{margin : '0 8px', textDecoration : 'none',}} className={({isActive}) => isActive ? 'text-warning fw-bold' : 'text-white '}>Lala</NavLink>
                        
                    </Nav>
                    <Nav>
                        <Nav.Link href="">
                            <img src="" alt="user" />
                        </Nav.Link>
                        <Link to='/login'><button className='btn btn-warning'>Login</button></Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;