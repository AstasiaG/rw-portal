import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const RouteGuard = ({ component: Component, ...rest }) => {

   function hasJWT() {
       let flag = false;
       localStorage.getItem("token") ? flag=true : flag=false
       return flag
   }

   return (
       <Route {...rest}
           render={props => (
               hasJWT() ?
                   <Component {...props} />
                   :
                   <Navigate to={{ pathname: '/' }} />
           )}
       />
   );
};

export default RouteGuard;