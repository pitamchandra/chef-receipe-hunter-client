import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Chefs = ({chef}) => {
    const {name, photo, like, recipes, years_experience, id} = chef;
    return (
        <Col>
          <Card>
            <Card.Img variant="top" src={photo} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>Experience : {years_experience} years</Card.Text>
              <Card.Text>Total Recipes : {recipes.length}</Card.Text>
              <Card.Text>Like : {like}</Card.Text>
              <Link to={`/chef-recipes/${id}`}><Button variant='warning'>View Recipes</Button></Link>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default Chefs;