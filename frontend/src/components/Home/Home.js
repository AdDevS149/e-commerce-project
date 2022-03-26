import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedCollection from '../Products/FeaturedCollection';
import '../../styles/Home.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const Home = () => {
  return (
    <main>
      <Container>
        <Row>
          <figure className='position-relative'>
            <img width='100%' height='700px' className='img-fluid' src={'/images/ben-white-unsplash.jpeg'} alt='man modeling a shoulder bag' />

            <figcaption>Bags reimagined for modern life.</figcaption>

            <figcaption>
              <Link to={'/products'}>
                <Button className='btn'>SHOW NOW</Button>
              </Link>
            </figcaption>
          </figure>
          <Col sm={12}></Col>
        </Row>

        <Row className='px-1 my-2'>
          <Col sm={5}></Col>
        </Row>

        <Row className='px-4 my-5'>
          <Col sm={4}>
            <Image src={'/images/studio-bag.png'} fluid rounded className='' />
          </Col>

          <Col sm={4}>
            <h4 className='font-weight-light'>Designed for fashion. Crafted for sport.</h4>
            <p>
              {' '}
              We make
              <Link to={'/products'}>
                <span> products </span>
              </Link>
              that effortlessly transition from day to night. From the board room to the fitness studio, and everywhere in between, each Nomads piece is thoughtfully created to be the perfect balance
              of form and function.
            </p>
            <button>STUDIO BAG</button>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
      <FeaturedCollection />
    </main>
  );
};

export default Home;
