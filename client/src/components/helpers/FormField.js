import React from 'react';
import { Col } from 'react-bootstrap';

const FormField = ({input, type, placeholder, meta: {error, touched}}) => {
  const errorBorder = () => (touched && error) ? 'red-border' : '';

  return (
    <div className="control control-expanded mb-1">
      <input {...input} className={`input ${errorBorder()}`} type={type} placeholder={placeholder}/>
      <Col xs='12' className="text-danger font-12">
        {touched && error}
      </Col>
    </div>
  );
};


export default FormField;