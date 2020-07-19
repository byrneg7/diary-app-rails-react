import React, { useState } from 'react';
import Bounce from 'react-reveal/Bounce';
import { useDispatch } from "react-redux";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthFormContainer = ({handleSubmit}) => {
  const dispatch = useDispatch();
  const [signIn, setSignIn] = useState(false);


  const renderForm = () => {
    if(signIn) {
      return <LoginForm setSignIn={setSignIn}/>
    } else {
      return <SignupForm setSignIn={setSignIn}/>
    }
  };

  return (
    <Bounce left>
      {renderForm()}
    </Bounce>
  )
};

export default AuthFormContainer;
