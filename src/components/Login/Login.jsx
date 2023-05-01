import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link  } from "react-router-dom";

const Login = () => {
    return (
        <div style={{width: '300px', margin : '20px auto'}}>
            <h3>Please Login</h3>
            <Form className='border p-3 mt-3'>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Login
                </Button>
                <Form.Text className='mt-3 d-block'>Don&apos;t have an account? <Link to='/register'>Register</Link> </Form.Text>
            </Form>
            <div className='my-3 d-flex align-items-center gap-3'>
                <div className="w-100 border"></div>
                <span>OR</span>
                <div className="w-100 border"></div>
            </div>
            <div>
                <button className='btn btn-outline-warning w-100'> <FaGoogle className='text-primary'></FaGoogle> Continue with Google</button>
            </div>
            <div>
                <button className='btn btn-outline-warning w-100 mt-3'> <FaGithub className='text-black'></FaGithub> Continue with Github</button>
            </div>
        </div>
    );
};

export default Login;