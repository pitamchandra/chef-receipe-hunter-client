import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Recipes = ({recipe}) => {
    const {ingredients, method, name, rating} = recipe;
    console.log(recipe)
    return (
        <Col className="mb-4">
            <Card>
                <Card.Img variant="top" src={recipe.image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div className="d-flex align-items-center">
                        <Rating
                            style={{ maxWidth: 100,}}
                            value={Math.round(rating)}
                            readOnly
                            />
                        <Card.Text className='flex-grow-1 mt-3 ms-2'> {rating}</Card.Text>
                        <Button variant='warning'>Favorite</Button>
                    </div>
                </Card.Body>
            </Card>   
        </Col>
    );
};

export default Recipes;