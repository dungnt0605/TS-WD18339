// ProductList.tsx
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import { Product } from '~/interFace/Products'
import BannerHome from './BannerHome'

const ProductList = () => {
  const [pro, setPro] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((e) => setPro(e))
  }, [])

  console.log(pro)

  return (
    <>
      <BannerHome />
      <div>
        <div id='category'>
          <Container>
            <Row>
              <Col md={3}>
                <svg width='250px' height='400px' xmlns='http://www.w3.org/100/svg'>
                  <path
                    fill='currentColor'
                    d='M224 104h-8.37a88 88 0 0 0-175.26 0H32a8 8 0 0 0-8 8a104.35 104.35 0 0 0 56 92.28V208a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-3.72A104.35 104.35 0 0 0 232 112a8 8 0 0 0-8-8m-24.46 0h-51.42a71.84 71.84 0 0 1 41.27-29.57A71.45 71.45 0 0 1 199.54 104m-26.06-47.77q2.75 2.25 5.27 4.75a87.92 87.92 0 0 0-49.15 43h-29.5A72.26 72.26 0 0 1 168 56c1.83 0 3.66.09 5.48.23M128 40a71.87 71.87 0 0 1 19 2.57A88.36 88.36 0 0 0 83.33 104H56.46A72.08 72.08 0 0 1 128 40m36.66 152a8 8 0 0 0-4.66 7.3v8.7H96v-8.7a8 8 0 0 0-4.66-7.3a88.29 88.29 0 0 1-51-72h175.29a88.29 88.29 0 0 1-50.97 72'
                  ></path>

                  <text x='30' y='300' fontSize='50'>
                    Foodies
                  </text>
                </svg>
              </Col>

              <Col md={3}>
                <svg width='250px' height='400px' xmlns='http://www.w3.org/100/svg'>
                  <path
                    fill='currentColor'
                    d='M176 68a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-50.88 61.85a8 8 0 0 0-11.27 1l-40 48a8 8 0 0 0 12.3 10.24l40-48a8 8 0 0 0-1.03-11.24M240 80a8 8 0 0 1-3.56 6.66L216 100.28V120a104.11 104.11 0 0 1-104 104H8a8 8 0 0 1-6.25-13L96 93.19V76a60 60 0 0 1 117.21-18.14l23.23 15.48A8 8 0 0 1 240 80m-22.42 0L201.9 69.54a8 8 0 0 1-3.31-4.64A44 44 0 0 0 112 76v20a8 8 0 0 1-1.75 5L24.64 208H112a88.1 88.1 0 0 0 88-88V96a8 8 0 0 1 3.56-6.66Z'
                  ></path>
                  <text x='20' y='300' fontSize='50'>
                    Bird Shop
                  </text>
                </svg>
              </Col>
              <Col md={3}>
                <svg width='250px' height='400px' xmlns='http://www.w3.org/100/svg'>
                  <path
                    fill='currentColor'
                    d='m239.71 125l-16.42-88a16 16 0 0 0-19.61-12.58l-.31.09L150.85 40h-45.7L52.63 24.56l-.31-.09a16 16 0 0 0-19.61 12.58L16.29 125a15.77 15.77 0 0 0 9.12 17.52a16.26 16.26 0 0 0 6.71 1.48a15.48 15.48 0 0 0 7.88-2.16V184a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40v-42.15a15.5 15.5 0 0 0 7.87 2.16a16.31 16.31 0 0 0 6.72-1.47a15.77 15.77 0 0 0 9.12-17.54M32 128l16.43-88L90.5 52.37Zm144 80h-40v-12.69l13.66-13.65a8 8 0 0 0-11.32-11.32L128 180.69l-10.34-10.35a8 8 0 0 0-11.32 11.32L120 195.31V208H80a24 24 0 0 1-24-24v-60.89L107.92 56h40.15L200 123.11V184a24 24 0 0 1-24 24m48-80l-58.5-75.63L207.57 40zm-120 12a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12'
                  ></path>
                  <text x='30' y='300' fontSize='50'>
                    Dog Shop
                  </text>
                </svg>
              </Col>
              <Col md={3}>
                <svg width='250px' height='400px' xmlns='http://www.w3.org/100/svg'>
                  <path
                    fill='currentColor'
                    d='M96 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12m76-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m60-80v88c0 52.93-46.65 96-104 96S24 188.93 24 136V48a16 16 0 0 1 27.31-11.31c.14.14.26.27.38.41L69 57a111.22 111.22 0 0 1 118.1 0l17.21-19.9c.12-.14.24-.27.38-.41A16 16 0 0 1 232 48m-16 0l-21.56 24.8a8 8 0 0 1-10.81 1.2A88.86 88.86 0 0 0 168 64.75V88a8 8 0 1 1-16 0V59.05a97.43 97.43 0 0 0-16-2.72V88a8 8 0 1 1-16 0V56.33a97.43 97.43 0 0 0-16 2.72V88a8 8 0 1 1-16 0V64.75A88.86 88.86 0 0 0 72.37 74a8 8 0 0 1-10.81-1.17L40 48v88c0 41.66 35.21 76 80 79.67v-20.36l-13.66-13.66a8 8 0 0 1 11.32-11.31L128 180.68l10.34-10.34a8 8 0 0 1 11.32 11.31L136 195.31v20.36c44.79-3.69 80-38 80-79.67Z'
                  ></path>
                  <text x='30' y='300' fontSize='50'>
                    Cat Shop
                  </text>
                </svg>
              </Col>
            </Row>
          </Container>
        </div>

        <div id='pet'>
          <Container>
            <h2>Pet food and clothing</h2>
            <Row className='mt-5'>
              {pro.map((e) => (
                <Col md={3} key={e.id} className='my-3'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant='top' src={e.image} />
                    <Card.Body>
                      <Card.Title className='fw-bold'>{e.name}</Card.Title>
                      <div className='d-flex my-2'>
                        <i className='fa-solid fa-star text-warning'></i>
                        <i className='fa-solid fa-star text-warning'></i>
                        <i className='fa-solid fa-star text-warning'></i>
                        <i className='fa-solid fa-star text-warning'></i>
                        <i className='fa-solid fa-star text-warning'></i>
                      </div>
                      <Card.Text className='fs-4'>$ {e.price}</Card.Text>
                      <Button variant='outline-dark'>Add to cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        <div id='banner' className='my-4'>
          <Container>
            <Row>
              <Col md={6} className='text-center text-md-start my-auto ps-5'>
                <p className='fs-1'>UPTO 40% OFF</p>
                <h2 className='fw-bold fs-1 my-5'>
                  Clearance <br /> Sale !!!
                </h2>
                <Button variant='outline-dark py-4 px-5 fw-bold'>
                  SHOP NOW <i className='fa-solid fa-arrow-right'></i>{' '}
                </Button>
              </Col>
              <Col md={6} className='d-flex justify-content-center align-items-center'>
                <img src='https://demo.templatesjungle.com/waggy/images/banner-img2.png' alt='Banner Image' className='img-fluid ' />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default ProductList
