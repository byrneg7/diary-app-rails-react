import React, { useEffect } from 'react';

import Router from './Router';
import Modals from "./modals/Modals";
import apiClient from "../services/axiosConfig";
import { useDispatch } from "react-redux";
import { CLEAR_USER, FETCH_USER } from "../reducers/types";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    loginStatus()
  }, []);

  const loginStatus = () => {
    apiClient.get('/logged_in',
      {withCredentials: true})
      .then(res => {
        if (res.data.user) {
          dispatch({type: FETCH_USER, payload: res.data.user})
        } else {
          dispatch({type: CLEAR_USER})
        }
      })
      .catch(error => console.log('api errors:', error))
  };

  return (
    <>
      <Modals/>
      <Router/>
    </>
  )
};

export default App;
