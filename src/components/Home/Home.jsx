import React from 'react';
import banner from '../../assets/banner.jpg'
import HeadingTitle from '../HeadingTitle/headingTitle';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import cardImg from '../../assets/about.jpg'
import cardImg2 from '../../assets/about-img-2.jpg'
import cardImg3 from '../../assets/about-img-3.jpg'
import { Button } from 'react-bootstrap';


const Home = () => {
    const styles = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        display: 'flex',
        alignItems: 'center'
      };
    return (
        <>
        <div style={styles}>
            <div className=' container text-white'>
                <h1 className='' style={{fontSize: '60px'}}>Food Made with <span className='text-warning'>Love</span></h1>
                <p>We are fluent in making appetizing meals. Don’t settle for mediocre, <br /> choose Gourmand! Take a slice of our perfect culinary heaven!</p>
                <button className='btn btn-warning'>Contact now</button>
            </div>
        </div>
        <div className='bg-white py-5'>
            <HeadingTitle
                title = 'who we are'
                description= 'Everything You Want to Know'
            ></HeadingTitle>
            <div className='container mt-5'>
                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={cardImg} />
                            <Card.Body>
                            <Card.Title>Fresh Testy</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis montes
                            </Card.Text>
                            <Button variant="warning">See More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={cardImg2} />
                            <Card.Body>
                            <Card.Title>Testy The Different</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis montes
                            </Card.Text>
                            <Button variant="warning">See More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={cardImg3} />
                            <Card.Body>
                            <Card.Title>Made With Love</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis montes
                            </Card.Text>
                            <Button variant="warning">See More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
        </>
    );
};

export default Home;