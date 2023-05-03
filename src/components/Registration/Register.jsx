import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const {register} = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const location = useLocation()
    const path = location?.state?.pathname || '/';

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        setError('')
        if(password.length < 6){
            setError("Password must at least 6 character!!")
            return;
        }
        register(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
            handleUser(createdUser, name, photo)
            navigate(path)
        })
        .catch(error =>{
            setError(error.message)
        })
    }
    const handleUser = (user, name, photo) =>{
        updateProfile(user, {
            displayName : name,
            photoURL : photo
        })
    }

    return (
        <div style={{width: '300px', margin : '20px auto'}}>
            <h3>Please Register</h3>
            <Form onSubmit={handleSubmit} className='border p-3 mt-3'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name= 'name' placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="photo url" />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Register
                </Button>
                {
                    error && <Form.Text className='mt-3 d-block text-danger'>{error}</Form.Text>
                }
                <Form.Text className='mt-3 d-block'>Already have an account? <Link to='/login'>Login</Link> </Form.Text>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Register;