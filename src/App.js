import React from 'react';
import './App.css';
import {Navbar, Nav, Button} from 'react-bootstrap';
import Images from "./components/Images";
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
  <Navbar.Collapse id="basic-navbar-nav">
  <Navbar.Text>
      Click on the pictures but DO NOT click on them more than once!
    </Navbar.Text>
  </Navbar.Collapse>
  
</Navbar>
<Images>
</Images>
    </div>
  );
}

export default App;
 /*
 <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav.Text className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav.Text>
  </Navbar.Collapse>
  */