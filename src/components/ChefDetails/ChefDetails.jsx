import React from 'react';
import banner from '../../assets/chefBg.jpg'
import { useLoaderData } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Recipes from '../../Recipes/Recipes';


const ChefDetails = () => {
    const chefDetails = useLoaderData()
    const {name, photo, like, recipes, years_experience, id, description} = chefDetails;
    const styles = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 0', 
        display: 'flex',
        alignItems: 'center'
      };
   
    return (
        <>
            <div style={styles}>
                <div className='container text-white'>
                    <Row xs={1} md={2} className="g-4 align-items-center">
                        <Col>
                            <h1 className=''>Chef Name: <span className='text-warning'>{name}</span></h1>
                            <p>{description}</p>
                            <div className="d-flex align-items-center justify-content-between">
                                <p>Experience : <span className='text-warning'>{years_experience}</span> years</p>
                                <p>Total Recipes : <span className='text-warning'>{recipes.length}</span></p>
                                <p>Like : {like}</p>
                            </div>
                        </Col>
                        <Col>
                            <div className='bg-warning rounded p-3 w-75 ms-auto'>
                                <img style={{width : '100%', }} src={photo} alt="chef image" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <Container className="my-5">
                <h2 className="text-center mb-4">Recipes</h2>
                <Row xs={1} md={2} lg={3}>
                    {
                        recipes.map((recipe, index) => <Recipes
                            key={index}
                            recipe = {recipe}
                        ></Recipes>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default ChefDetails;