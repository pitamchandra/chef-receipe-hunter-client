import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Social = (props) => {
    const {logInWithGoogle} = useContext(AuthContext)
    const path = props.path;
    const navigate = useNavigate()
    console.log(path);
    const handleGoogle = () =>{
        logInWithGoogle()
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
            navigate(path)
        })
        .catch(error =>{
            setError(error);
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
                <button className='btn btn-outline-warning w-100 mt-3'> <FaGithub className='text-black'></FaGithub> Continue with Github</button>
            </div>
        </>
    );
};

export default Social;