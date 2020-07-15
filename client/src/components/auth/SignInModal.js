import React from 'react'
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Button, Col, Form } from "react-bootstrap";

import GenericModal from "../helpers/GenericModal";
import { FETCH_USER, TOGGLE_MODAL_OFF, TOGGLE_MODAL_ON } from "../../reducers/types";
import FormField from "../helpers/FormField";
import { LOGIN_FORM_FIELDS } from "../constants/FormFields";
import apiClient from "../../services/axiosConfig";

const SignInModal = ({handleSubmit, reset}) => {
  const dispatch = useDispatch();

  const renderFields = () => LOGIN_FORM_FIELDS.map(({label, name, placeholder, type}) => (
    <Field key={name} component={FormField} type={type} label={label} name={name} placeholder={placeholder}/>
  ));

  const onSubmit = ({email, password}) => {
    const user = {user: {email, password}};
    apiClient.post('/login', user, {withCredentials: true})
      .then(res => {
        apiClient.get('/users')
          .then(res => {
            if (res) {
              console.log('logged in: ', res)
              dispatch({type: FETCH_USER, payload: res.data})
            } else {
              console.log('not logged in')
            }
          })
          .catch(err => console.log(err))
      })
      .catch(e => console.log(e))
      .finally(() => {
        reset();
        dispatch({type: TOGGLE_MODAL_OFF})
      })
  };

  const bodyContent = () => (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Col xs="12">
        {renderFields()}
      </Col>
      <Button type="submit">Submit form</Button>
    </Form>
  );


  return <GenericModal title='Sign in' body={bodyContent()} footer='footer content' name='signin'/>
};


function validate(values) {
  const errors = {};
  LOGIN_FORM_FIELDS.forEach(field => {
    if (!values[field.name]) {
      errors[field.name] = 'You must provide a value.'
    }
  });
  return errors;
}

export default reduxForm({validate, form: 'loginForm', destroyOnUnmount: false})(SignInModal);