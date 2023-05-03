import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate  } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';
import Social from '../SocialLogin/Social';

const Login = () => {
    const {login,} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const path = location?.state?.pathname || '/';
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
        setSuccess('')
        login(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setSuccess('Login Successfully!')
            navigate(path)
        })
        .catch(error =>{
            setError(error.message)
        })
    }
    
    return (
        <div style={{width: '300px', margin : '20px auto'}}>
            <h3>Please Login</h3>
            <Form onSubmit={handleSubmit} className='border p-3 mt-3'>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <Button variant="warning" type="submit">
                    Login
                </Button>
                {
                    error && <Form.Text className='mt-3 d-block text-danger'>{error}</Form.Text>
                }
                {
                    success && <Form.Text className='mt-3 d-block text-success'>{success}</Form.Text>
                }
                <Form.Text className='mt-3 d-block'>Don&apos;t have an account? <Link to='/register' state={location?.state}>Register</Link> </Form.Text>
            </Form>
            <Social path={path}></Social>
        </div>
    );
};

export default Login;