import React from 'react';
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { openModal } from "../modals/openModal";

const Test = ({children}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button className='btn btn-primary' onClick={() => openModal(dispatch, 'signin')}> sign in </Button>
      <Button className='btn btn-danger' onClick={() => openModal(dispatch, 'logout')}> log out </Button>
      {children}
    </div>
  )
};

export default Test;
