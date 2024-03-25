import React, { useEffect } from 'react';
import { NavLink, Outlet,useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './navbar.css';

function Navigation() {
  const navigate=useNavigate()
    const user=localStorage.getItem('token')
  
    useEffect(()=>{
    },[])
   const handleLogout=()=>{
    localStorage.clear()
    navigate("/login")
   }

    return (
        <>
            <Navbar expand="lg" className='navigation'>
                <Container fluid>
                    <Navbar.Brand href="#" className='me-5'>Authentication</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            
                        </Nav>
                        <Nav className='auth_btn'>
                            {user ?
                                <NavLink to='/login' onClick={handleLogout}>Logout</NavLink> :
                                <NavLink to='/login'>Login</NavLink>
                            }
                            <NavLink to='/register'>Register</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}

export default Navigation;
