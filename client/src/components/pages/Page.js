import React, { useEffect, useState } from 'react';
import { Button, Col, Form } from "react-bootstrap";
import { PAGE_FORM_FIELDS } from "../constants/FormFields";
import { Field, reduxForm } from "redux-form";
import FormTextArea from "../helpers/FormTextArea";
import apiClient from "../../services/axiosConfig";

const Page = ({journal, handleSubmit}) => {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    fetchPages()
  }, []);

  const fetchPages = () => {
    apiClient.get(`/journals/${journal.id}/pages`)
      .then(res => setPages(res.data))
      .catch(err => console.log(err))
  };

  const renderJournalField = () => PAGE_FORM_FIELDS.map(({label, name, placeholder, type}) => (
    <Field key={name} component={FormTextArea} type={type} label={label} name={name} placeholder={placeholder}/>
  ));

  const onSubmit = (content) => {
    apiClient.post(`/journals/${journal.id}/pages`, {page: content})
  };

  const renderForm = () => {
    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Col xs="12">
          {renderJournalField()}
        </Col>
        <Button type="submit">Submit form</Button>
      </Form>
    )
  };

  const renderPages = () => {
    if (pages && pages.length > 0) {
      return pages.map(page => {
        console.log(page)
        return (
          <h4>{page.content}</h4>
        )
      })
    } else {
      return 'no pages'
    }
  };

  return (
    <div>
      {renderForm()}
      {renderPages()}
    </div>
  )
};

function validate(values) {
  const errors = {};
  PAGE_FORM_FIELDS.forEach(field => {
    if (!values[field.name]) {
      errors[field.name] = 'You must provide a value.'
    }
  });
  return errors;
}

export default reduxForm({validate, form: 'loginForm', destroyOnUnmount: false})(Page);