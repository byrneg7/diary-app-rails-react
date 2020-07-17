import React from 'react';

import LandingNav from "../shared/navbar/LandingNav";
import { Button } from "react-bootstrap";

const AuthLayout = ({children}) => {
  return (
    <div>
      <h1> auth layout</h1>
      <LandingNav/>
      <Button> sin out</Button>
      {children}
    </div>
  )
};

export default AuthLayout;
