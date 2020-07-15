import React from 'react';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { openModal } from "../modals/openModal";

const LandingPage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Link to='/journals'>create a journal</Link>

      <div className='btn btn-primary' onClick={() => openModal(dispatch, 'signin')}>
        sign in modal
      </div>

      <div className='btn btn-success' onClick={() => openModal(dispatch, 'signup')}>
        sign up modal
      </div>

      <div className='btn btn-danger' onClick={() => openModal(dispatch, 'logout')}>
        logout modal
      </div>
    </>
  )
};

export default LandingPage;