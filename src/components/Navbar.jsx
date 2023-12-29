import { Button } from 'bootstrap';
import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


function navbar() {

    const navigate = useNavigate()
    const handleSignOut = (e) => {
        e.preventDefault()
        navigate('/')
        sessionStorage.clear()
        localStorage.clear()
        toast("User Logged out!")  
    }
    
        



    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">User Dashboard</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Navbar.Brand onClick={handleSignOut}>Sign Out</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default navbar