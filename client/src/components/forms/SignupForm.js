import React from 'react';
import { REGISTER_FORM_FIELDS } from "../constants/FormFields";
import { Field, Form, reduxForm } from "redux-form";
import { useDispatch } from "react-redux";

import FormField from "../helpers/FormField";
import { EMAIL_REGEX } from "../constants/Validations";
import apiClient from "../../services/axiosConfig";
import { FETCH_USER } from "../../reducers/types";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

const SignupForm = ({handleSubmit, setSignIn}) => {
  const dispatch = useDispatch();

  const renderFields = () => REGISTER_FORM_FIELDS.map(({label, name, placeholder, type}) =>
    <Field key={name} component={FormField} type={type} label={label} name={name} placeholder={placeholder}/>
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

  return (
    <Form className='hero-form newsletter-form field' onSubmit={handleSubmit(onSubmit)}>
      {renderFields()}
      <div className="control">
        <button className="button button-primary button-block button-shadow w-100 mx-auto rounded" type="submit">
          Get Started
        </button>
        <Row>
          <Link to='#' className='font-14 no-underline mt-1 mx-auto' onClick={()=>setSignIn(true)}> Already registered? Login here </Link>
        </Row>
      </div>
    </Form>
  )
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
        errors[field.name] = 'Must be a valid email address'
      }
    }
  });
  return errors;
}

export default reduxForm({validate, form: 'signupForm', destroyOnUnmount: false})(SignupForm);
