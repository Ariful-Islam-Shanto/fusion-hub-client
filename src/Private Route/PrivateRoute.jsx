import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../Auth Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);

    if(user) {
        return children;
    }
    else{
        toast.error('Please login to see details');
        return <Navigate to={'/login'}></Navigate>
    }
    
};

export default PrivateRoute;