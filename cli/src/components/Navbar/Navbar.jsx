// import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FaUser } from 'react-icons/fa'
import SwipeableTemporaryDrawer from '../Drawer/Drawer'
import { BsCoin } from 'react-icons/bs'
import { useState } from 'react'

function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // Função para abrir o drawer
  const openDrawer = () => {
    setIsDrawerOpen(true)
  }

  // Função para fechar o drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {/* Navbar.Brand com um campo de busca */}
          <Navbar.Brand href="#home">
            <h1>LOGO</h1>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {' '}
              <Nav.Link className="flex items-center gap-1" href="#home">
                <a href="">83</a>
                <BsCoin />
              </Nav.Link>
              <Nav.Link onClick={openDrawer} className="flex items-center">
                <FaUser />
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SwipeableTemporaryDrawer
        isOpen={isDrawerOpen}
        toggleDrawer={closeDrawer}
      />
    </>
  )
}

export default NavBar
