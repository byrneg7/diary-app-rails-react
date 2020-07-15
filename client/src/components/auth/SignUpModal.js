import React from 'react'
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Button, Col, Form } from "react-bootstrap";

import GenericModal from "../helpers/GenericModal";
import { FETCH_USER, TOGGLE_MODAL_OFF, TOGGLE_MODAL_ON } from "../../reducers/types";
import FormField from "../helpers/FormField";
import { REGISTER_FORM_FIELDS } from "../constants/FormFields";
import { EMAIL_REGEX } from "../constants/Validations";
import apiClient from "../../services/axiosConfig";

const SignUpModal = ({handleSubmit, reset}) => {
  const dispatch = useDispatch();

  const renderFields = () => REGISTER_FORM_FIELDS.map(({label, name, placeholder, type}) => (
    <Field key={name} component={FormField} type={type} label={label} name={name} placeholder={placeholder}/>
  ));

  const bodyContent = () => (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Col xs="12">
        {renderFields()}
      </Col>

      <Button type="submit">Submit form</Button>

      <div>
        Already have an account?
        <a href='#' onClick={() => dispatch({type: TOGGLE_MODAL_ON, payload: 'signin'})}>
          Sign in
        </a>
      </div>
    </Form>
  );

  const onSubmit = (user) => {
    apiClient.post('/users', {user}, {withCredentials: true})
      .then(res => {
        if (res.data.status === 'created') {
          dispatch({type: FETCH_USER, payload: res.user});
          alert('logged in')
        } else {
          alert('failed')
        }
      })
      .catch(error => console.log('api errors:', error))
  };


  return <GenericModal title='Sign up' body={bodyContent()} footer='footer content' name='signup'/>
};

function validate(values) {
  const errors = {};
  REGISTER_FORM_FIELDS.forEach(field => {

    if (!values[field.name]) {
      errors[field.name] = 'You must provide a value.'
    }

    if (field.name === 'password_confirmation') {
      if (values[field.name] !== values['password']) {
        errors[field.name] = 'Confirmation does not match password.'
      }
    }

    if (field.name === 'email') {
      if (!EMAIL_REGEX.test(values[field.name])) {
        errors[field.name] = 'Must be a valid email address.'
      }
    }
  });
  return errors;
}

export default reduxForm({validate, form: 'signupForm', destroyOnUnmount: false})(SignUpModal);