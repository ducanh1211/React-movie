import React, {  } from 'react';
import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import logo from '../../../asset/logo.svg';
import "./Header.css";
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleSearch = (e) =>{
        e.preventDefault();
        navigate(`/search/${e.target.querySelector("input").value}`)
    }
    
    return (
        <div>
            <Navbar expand="lg" className='header'>
                <Container>
                    <Navbar.Brand href="#">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/" className='text-white'>Home</Link>
                        <Link to="/movie" className='text-white'>Movie</Link>
                        <Nav.Link href="#" disabled>
                        Link
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex" onSubmit={handleSearch}>
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;