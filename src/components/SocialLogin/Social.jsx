import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Social = (props) => {
    const {logInWithGoogle,logInWithGithub} = useContext(AuthContext)
    const path = props.path;
    const navigate = useNavigate()

    const handleGoogle = () =>{
        logInWithGoogle()
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
            navigate(path)
        })
        .catch(error =>{
            toast(error.message);
        })
    }
    const handleGithub = () =>{
        logInWithGithub()
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
            navigate(path)
        })
        .catch(error =>{
            toast(error.message);
        })
    }
    return (
        <>
            <div className='my-3 d-flex align-items-center gap-3'>
                <div className="w-100 border"></div>
                <span>OR</span>
                <div className="w-100 border"></div>
            </div>
            <div>
                <button onClick={handleGoogle} className='btn btn-outline-warning w-100'> <FaGoogle className='text-primary'></FaGoogle> Continue with Google</button>
            </div>
            <div>
                <button onClick={handleGithub} className='btn btn-outline-warning w-100 mt-3'> <FaGithub className='text-black'></FaGithub> Continue with Github</button>
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default Social;