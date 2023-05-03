import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <div style={{height : '90vh'}} class="d-flex justify-content-center align-items-center">
            <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={location} replace></Navigate>;
};

export default PrivateRoute;