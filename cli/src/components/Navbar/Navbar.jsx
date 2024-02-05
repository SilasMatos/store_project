// import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'

//import NavDropdown from 'react-bootstrap/NavDropdown'
import { FaUser } from 'react-icons/fa'
import CustomDrawer from '../Drawer/Drawer'
import { BsCoin } from 'react-icons/bs'
import { useState } from 'react'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import './Navbar.css'

function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }

  return (
    <>
      <Navbar className="fixed-top bg-white shadow-sm p-3" >
        <Container>
          {/* Navbar.Brand com um campo de busca */}
          <Navbar.Brand href="#home">
            <h1 className="tracking-in-expand">LOGO</h1>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {' '}
              <Tooltip title="Pontos">
                <Nav.Link
                  aria-describedby={id}
                  variant="contained"
                  onClick={handleClick}
                  className="flex items-center gap-1"
                  href="#home"
                >
                  <BsCoin className="nav-icons" />
                </Nav.Link>
              </Tooltip>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
              >
                <Typography sx={{ p: 2 }}>
                  <div className="flex gap-2">
                    <div className="">
                      <p className="font-semibold text-xs text-gray-400">
                        Seus Pontos:
                      </p>
                      <p>83</p>
                    </div>
                    <div>.</div>
                  </div>
                </Typography>
              </Popover>
              <Tooltip title="Seu Perfil">
                <Nav.Link
                  onClick={handleDrawerOpen}
                  className="flex items-center"
                >
                  <FaUser className="nav-icons" />
                </Nav.Link>
              </Tooltip>
              <Tooltip title="Logout">
                <Nav.Link className="flex items-center">
                  <RiLogoutCircleRLine className="nav-icons" />
                </Nav.Link>
              </Tooltip>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CustomDrawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        name="silas"
      />
    </>
  )
}

export default NavBar
