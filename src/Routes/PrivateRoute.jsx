import React, { use } from 'react';
import { useLocation } from 'react-router';
import { AuthContext } from '../Components/Context/AuthContext';

const PrivateRoute = ({children}) => {

    const { user, loading } = use(AuthContext);
    const location = useLocation();
    // console.log(location)
    if (loading) {
        return <div>Loading</div>
    }
    if (!user) {
        return <Navigate state={location?.pathname} to={'/login'}></Navigate>
    }

    return children;
};

export default PrivateRoute;