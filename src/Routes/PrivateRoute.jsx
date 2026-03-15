import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Components/Context/AuthContext';
import Loading from '../Components/Loading/Loading';

const PrivateRoute = ({children}) => {

    const { user, loading } = use(AuthContext);
    const location = useLocation();
    // console.log(location)
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate state={location?.pathname} to={'/login'}></Navigate>
    }

    return children;
};

export default PrivateRoute;