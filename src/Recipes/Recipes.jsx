import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { Button, Card, Col, ListGroup } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const Recipes = ({recipe}) => {
    const {ingredients, method, name, rating} = recipe;

    const [isFavorite, setIsFavorite] = useState(false)
    const handleFavorite = () =>{
        setIsFavorite(!isFavorite);
        toast("Added to Favorite!")
    }
    return (
        <Col className="mb-4">
            <Card className='h-100 bg-secondary-subtle'>
                <Card.Img variant="top" src={recipe.image} />
                <Card.Body>
                    <Card.Title className='fs-4'>{name}</Card.Title>
                    <div className="d-flex align-items-center">
                        <Rating
                            style={{ maxWidth: 100,}}
                            value={Math.round(rating)}
                            readOnly
                            />
                        <Card.Text className='flex-grow-1 mt-3 ms-2'> {rating}</Card.Text>
                        <Button onClick={handleFavorite} variant='warning' disabled = {isFavorite}>Add to Favorite</Button>
                    </div>
                    <ListGroup variant="flush">
                        <h5>Ingredients</h5>
                        <ul>
                            {
                                ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                            }
                        </ul>
                    </ListGroup>
                    <ListGroup variant="flush">
                        <h5>Cooking Method</h5>
                        <ul>
                            {
                                method.map((m, index) => <li key={index}>{m}</li>)
                            }
                        </ul>
                    </ListGroup>
                </Card.Body>
                <ToastContainer></ToastContainer>
            </Card>   
        </Col>
    );
};

export default Recipes;