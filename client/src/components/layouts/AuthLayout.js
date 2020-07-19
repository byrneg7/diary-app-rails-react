import React from 'react';

import { Button } from "react-bootstrap";
import AuthNavContainer from "../shared/navbar/authNav/AuthNavContainer";

const AuthLayout = ({children}) => {
  return (
    <>
      <AuthNavContainer/>
      <h1> auth layout</h1>
      <Button> sin out</Button>
      {children}
    </>
  )
};

export default AuthLayout;
