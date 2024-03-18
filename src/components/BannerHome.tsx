import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Product } from '~/interFace/Products'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const BannerHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <>
      <div id='banner'>
        <Slider {...settings}>
          <Container>
            <Row>
              <Col md={6} className='d-flex justify-content-center align-items-center py-5'>
                <img src='https://demo.templatesjungle.com/waggy/images/banner-img.png' alt='Banner Image' className='img-fluid ' />
              </Col>
              <Col md={6} className='text-center text-md-start my-auto'>
                <p className='fs-1'>Save 10 - 20 % off</p>
                <h2 className='fw-bold fs-1 my-5'>
                  Best Destination For <span>Your Pets</span>
                </h2>
                <Button variant='outline-dark py-4 px-5 fw-bold'>
                  SHOP NOW <i className='fa-solid fa-arrow-right'></i>{' '}
                </Button>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col md={6} className='d-flex justify-content-center align-items-center'>
                <img src='https://demo.templatesjungle.com/waggy/images//banner-img3.png' alt='Banner Image' className='img-fluid ' />
              </Col>
              <Col md={6} className='text-center text-md-start my-auto'>
                <p className='fs-1'>Save 10 - 20 % off</p>
                <h2 className='fw-bold fs-1 my-5'>
                  Best Destination For <span>Your Pets</span>
                </h2>
                <Button variant='outline-dark py-4 px-5 fw-bold'>
                  SHOP NOW <i className='fa-solid fa-arrow-right'></i>{' '}
                </Button>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col md={6} className='d-flex justify-content-center align-items-center'>
                <img src='https://demo.templatesjungle.com/waggy/images/banner-img4.png' alt='Banner Image' className='img-fluid ' />
              </Col>
              <Col md={6} className='text-center text-md-start my-auto'>
                <p className='fs-1'>Save 10 - 20 % off</p>
                <h2 className='fw-bold fs-1 my-5'>
                  Best Destination For <span>Your Pets</span>
                </h2>
                <Button variant='outline-dark py-4 px-5 fw-bold'>
                  SHOP NOW <i className='fa-solid fa-arrow-right'></i>{' '}
                </Button>
              </Col>
            </Row>
          </Container>
        </Slider>
      </div>
    </>
  )
}

export default BannerHome
