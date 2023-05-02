import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Chefs = ({chef}) => {
    const {name, photo, like, num_recipes, years_experience} = chef;
    return (
        <Col>
          <Card>
            <Card.Img variant="top" src={photo} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>Experience : {years_experience} years</Card.Text>
              <Card.Text>Total Recipes : {num_recipes}</Card.Text>
              <Card.Text>Like : {like}</Card.Text>
              <Button variant='warning'>View Recipes</Button>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default Chefs;