import React from 'react';
import { LOGIN_FORM_FIELDS, REGISTER_FORM_FIELDS } from "../constants/FormFields";
import { Field, Form, reduxForm } from "redux-form";
import { useDispatch } from "react-redux";

import FormField from "../helpers/FormField";
import { EMAIL_REGEX } from "../constants/Validations";
import apiClient from "../../services/axiosConfig";
import { FETCH_USER, TOGGLE_MODAL_OFF } from "../../reducers/types";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

const SignupForm = ({handleSubmit, setSignIn}) => {
  const dispatch = useDispatch();

  const renderFields = () => LOGIN_FORM_FIELDS.map(({label, name, placeholder, type}) =>
    <Field key={name} component={FormField} type={type} label={label} name={name} placeholder={placeholder}/>
  );

  const onSubmit = ({email, password}) => {
    const user = {user: {email, password}};
    apiClient.post('/login', user, {withCredentials: true})
      .then(res => {
        apiClient.get('/users/me')
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
      .finally(() => dispatch({type: TOGGLE_MODAL_OFF}))
  };

  return (
    <Form className='hero-form newsletter-form field' onSubmit={handleSubmit(onSubmit)}>
      {renderFields()}
      <div className="control">
        <button className="button button-primary button-block button-shadow w-100 mx-auto rounded" type="submit">
          Sign in
        </button>
        <Row>
          <Link to='#' className='font-14 no-underline mt-1 mx-auto' onClick={() => setSignIn(false)}>
            New user? Get started
          </Link>
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
