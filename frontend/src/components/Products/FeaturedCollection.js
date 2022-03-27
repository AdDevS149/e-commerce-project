import { Link } from 'react-router-dom';
// import '../../styles/FeaturedCollection.css';

import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'bootstrap';
import { Container } from 'react-bootstrap';

const FeaturedCollection = () => {
  const value = useContext(DataContext);
  const [products] = value.products;

  const addToCart = value.addToCart;

  const featuredList = products

    .filter((product) => product.featured === true)
    .map((filteredProduct) => (
      <div key={filteredProduct.id}>
      <Row xs={1} md={2} className="g-4"> 
      <Col>    
        <Card style={{ width: '15rem' }}>
          <Link to={`/products/${filteredProduct.urlName}`}>
            <Card.Img className='small' variant='top' src={filteredProduct.image} alt={filteredProduct.item} />
          </Link>
          <Card.Body>
            <Card.Title>{filteredProduct.item}</Card.Title>
            <Card.Text>${filteredProduct.price}</Card.Text>

            <button onClick={() => addToCart(filteredProduct.id)}>ADD TO CART</button>
          </Card.Body>
        </Card>
        </Col> 
         </Row>
       </div>
     

    ));

  return (
    <>
      <h2 className='featured-collection__text'>Featured Collection</h2>
      <div>{featuredList}</div>
    </>
  );
};

export default FeaturedCollection;
