import React from 'react'
import { Image } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Header = () => {
  return (
    <>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand href='/'>
            {' '}
            <Image src='https://demo.templatesjungle.com/waggy/images/logo.png' rounded />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto mx-auto'>
              <Nav.Link href='/' className='fw-bold fs-5 mx-2'>
                Home
              </Nav.Link>
              <Nav.Link href='/login' className='fw-bold fs-5 mx-2'>
                Products
              </Nav.Link>
              <NavDropdown title='About' id='basic-nav-dropdown' className='fw-bold fs-5 mx-2'>
                <NavDropdown.Item href='#action/3.1'>Food Pet</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>Dog pet</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Cat Pet</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'> link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='/' className='fw-bold fs-5 mx-2'>
                Contac
              </Nav.Link>
            </Nav>
            <Nav className='justify-content-end' activeKey='/home'>
              <Nav.Item>
                <Nav.Link href='/login' className='mx-3 fs-5'>
                  <i className='fa-solid fa-user'></i>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='/register' className='mx-3 fs-5'>
                  <i className='fa-solid fa-heart'></i>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='link-2' className='mx-3 fs-5'>
                  <i className='fa-solid fa-cart-shopping'></i>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
