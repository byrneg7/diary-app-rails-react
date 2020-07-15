import React from 'react'
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Button, Col, Form } from "react-bootstrap";

import GenericModal from "../helpers/GenericModal";
import { TOGGLE_MODAL_OFF, TOGGLE_MODAL_ON } from "../../reducers/types";
import FormField from "../helpers/FormField";
import { JOURNAL_FORM_FIELDS } from "../constants/FormFields";
import apiClient from "../../services/axiosConfig";

const JournalCreateModal = ({handleSubmit, reset}) => {
  const dispatch = useDispatch();

  const renderFields = () => JOURNAL_FORM_FIELDS.map(({label, name, placeholder, type}) => (
    <Field key={name} component={FormField} type={type} label={label} name={name} placeholder={placeholder}/>
  ));

  const onSubmit = ({title, description}) => {
    const journal = {journal: {title, description}};
    apiClient.post('/journals', journal, {withCredentials: true})
      .then(res => console.log(res))
      .catch(e => console.log(e))
      .finally(() => dispatch({type: TOGGLE_MODAL_OFF}))
  };

  const bodyContent = () => (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Col xs="12">
        {renderFields()}
      </Col>
      <Button type="submit">Submit form</Button>
    </Form>
  );

  return <GenericModal title='Create a new journal' body={bodyContent()} footer='footer content' name='journal'/>
};


function validate(values) {
  const errors = {};
  JOURNAL_FORM_FIELDS.forEach(field => {
    if (!values[field.name]) {
      errors[field.name] = 'You must provide a value.'
    }
  });
  return errors;
}

export default reduxForm({validate, form: 'loginForm', destroyOnUnmount: false})(JournalCreateModal);