import React, { Component } from 'react'
import { LinkContainer, NavLink } from 'react-router-bootstrap' ;
import cg from './assets/cg1.png' 
import { Form, FormControl, Button, Nav, Navbar, NavDropdown } from 'react-bootstrap'

class CustomNav extends Component {
    render () {
        return (
            <div>
                <Navbar bg="dark" expand="lg" fixed="top">
                <Navbar.Brand href="#home">
                    <img 
                        src={cg} 
                        width="300px"
                        height="47px"
                        className="logo"
                        alt="Codegangsters logo" 
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <LinkContainer to="/Home"><NavLink>Home</NavLink></LinkContainer>    
                    <LinkContainer to="/Forums"><Nav.Link>Forums</Nav.Link></LinkContainer>
                    <LinkContainer to="/AboutUs"><Nav.Link>About</Nav.Link></LinkContainer>
                    <LinkContainer to="/News"><Nav.Link>News</Nav.Link></LinkContainer>                    
                    <LinkContainer to="/Resources"><Nav.Link>Resources</Nav.Link></LinkContainer>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default CustomNav