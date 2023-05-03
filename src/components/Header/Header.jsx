import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link  } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><NavLink to="/" className={`text-white text-decoration-none`}>Chef Table BD</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink to="/" style={{margin : '0 8px', textDecoration : 'none',}} className={({isActive}) => isActive ? 'text-warning fw-bold' : 'text-white'}>Home</NavLink>
                       <NavLink to="/blog" style={{margin : '0 8px', textDecoration : 'none',}} className={({isActive}) => isActive ? 'text-warning fw-bold' : 'text-white '}>Blog</NavLink>
                        
                    </Nav>
                    <Nav>
                        {
                            user ? 
                            <div className='d-md-flex align-items-center gap-3'>
                            <Nav.Link href="">
                                <img style={{width : '50px', height: '50px', borderRadius: '50%'}} title={user?.displayName} src={user?.photoURL} alt="user" />
                            </Nav.Link>
                            <Link to='/login'><button onClick={logOut} className='btn btn-warning'>sign out</button></Link>
                            </div>:
                            <Link to='/login'><button className='btn btn-warning'>Login</button></Link>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;