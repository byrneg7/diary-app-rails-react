import React from 'react'
import { useDispatch } from "react-redux";
import { openModal } from "./modals/openModal";

const Test = () => {
  const dispatch = useDispatch()
  return (
    <>
      <h1> test component </h1>
      <button className='btn btn-primary' onClick={() => openModal(dispatch, 'signup')}> sign up</button>
      <button className='btn btn-secondary' onClick={() => openModal(dispatch, 'signin')}> sign in</button>
    </>
  )
};

export default Test;