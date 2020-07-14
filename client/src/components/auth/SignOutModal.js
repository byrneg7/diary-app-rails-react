import React from 'react'
import { useDispatch } from "react-redux";

import GenericModal from "../helpers/GenericModal";
import { CLEAR_USER, TOGGLE_MODAL_OFF } from "../../reducers/types";
import apiClient from "../../services/axiosConfig";

const SignOutModal = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    apiClient.delete('/logout', {withCredentials: true})
      .then(response => {
        dispatch({type: CLEAR_USER});
      })
      .catch(error => console.log(error))
  };

  const bodyContent = () => (
    <div>
      <button onClick={() => handleLogout()}>
        Log out
      </button>
    </div>
  );

  return <GenericModal title='Logout' body={bodyContent()} footer='footer content' name='logout'/>
};

export default SignOutModal;