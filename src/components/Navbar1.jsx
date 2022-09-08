import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const Navbar1 = () => { //Funcion de flecha poroqeue es una cte parentesis y una flecha



    return (

        
//   <nav classname ="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
//   <div classname ="container-fluid">
//     <img src="logo.png" width="48px" height="48px"/>
//     <a classname ="navbar-brand" href="#">Los Buenos Muchachos</a>
//     <button classname ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
//       <span classname ="navbar-toggler-icon"></span>
//     </button>
//     <div classname ="collapse navbar-collapse" id="navbarCollapse">
//       <ul classname ="navbar-nav me-auto mb-2 mb-md-0">
//         <li classname ="nav-item">
//           <a classname ="nav-link" href="#">Placeholder1</a>
//         </li>
//         <li classname ="nav-item">
//           <a classname ="nav-link" href="#">Placeholder2</a>
//         </li>
//         <li classname ="nav-item">
//           <a classname ="nav-link" href="#">Placeholder3</a>
//         </li>
//         <li classname ="nav-item dropdown">
//           <a classname ="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Placeholders
//           </a>
//           <ul classname ="dropdown-menu">
//             <li><a classname ="dropdown-item" href="" target="_blank">Placeholder</a></li>
//             <li><a classname ="dropdown-item" href="" target="_blank">Placeholder</a></li>
//             <li><hr classname ="dropdown-divider"></li>
//             <li><a classname ="dropdown-item" href="" target="_blank">Placeholder</a></li>
//           </ul>
//         </li>
//       </ul>
//       <form classname ="d-flex" role="search">
//         <input classname ="form-control me-2" type="search" placeholder="Search" aria-label="Search">
//         <button classname ="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>


    <Navbar bg="light" expand="lg">
    <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
            Separated link
            </NavDropdown.Item>
        </NavDropdown>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>



    )


}