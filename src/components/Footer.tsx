import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

function Footer() {
  return (
    <footer className='bg-dark text-light py-4 mt-5npm run dev'>
      <Container>
        <Row>
          <Col md={3} className='my-auto '>
            <div className='bg-light p-4 rounded-3'>
              <Image src='https://demo.templatesjungle.com/waggy/images/logo.png' rounded />
            </div>
          </Col>
          <Col md={3}>
            <h4>Company Name</h4>
            <p>Address: 123 Street, City, Country</p>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@example.com</p>
          </Col>
          <Col md={3}>
            <h4>Useful Links</h4>
            <ul className=''>
              <li className='my-2'>Link 1</li>
              <li className='my-2'>Link 2</li>
              <li className='my-2'>Link 3</li>
            </ul>
          </Col>
          <Col md={3}>
            <h4>Follow Us</h4>
            <ul className='lis'>
              <li className='my-2'>Facebook</li>
              <li className='my-2'>Twitter</li>
              <li className='my-2'>Instagram</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className='text-center mt-3'>© 2024 Company Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
