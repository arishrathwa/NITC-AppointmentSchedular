import React from "react";

import { Route,useNavigate } from "react-router-dom";


export const PrivateRoute = ({component: Component,isAuthenticated, ...rest})=> { // ...rest = >est of the props
  const navigate = new useNavigate();  
  return  <Route
    {...rest}
    render={ props=> isAuthenticated ? <Component {...props}/>:navigate('/login') }
    />
}
