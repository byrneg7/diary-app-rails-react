import React from 'react';
import { useDispatch } from "react-redux";

import { openModal } from "../modals/openModal";

const LandingPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className='btn btn-primary' onClick={() => openModal(dispatch, 'signup')}>
        open modal
      </div>
    </>
  )
};

export default LandingPage;