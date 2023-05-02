import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div style={{width: '300px', margin : '20px auto'}}>
            <h3>Please Register</h3>
            <Form className='border p-3 mt-3'>
                <Form.Group className="mb-3" name='name' controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="photo url" />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Register
                </Button>
                <Form.Text className='mt-3 d-block'>Already have an account? <Link to='/login'>Login</Link> </Form.Text>
            </Form>
        </div>
    );
};

export default Register;