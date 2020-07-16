import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router";
import apiClient from "../../services/axiosConfig";
import { Button, Col, Form } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import { FETCH_USER, TOGGLE_MODAL_OFF } from "../../reducers/types";
import { PAGE_FORM_FIELDS, REGISTER_FORM_FIELDS } from "../constants/FormFields";
import FormField from "../helpers/FormField";
import Page from "../pages/Page";

const Journal = ({handleSubmit, match}) => {
  const [journal, setJournal] = useState(null);
  useEffect(() => {
    fetchJournal()
  }, []);

  const fetchJournal = () => {
    const journalId = match.params.id;
    apiClient.get(`/journals/${journalId}`)
      .then(res => setJournal(res.data))
      .catch(err => console.log(err))
  };

  const renderJournal = () => {
    if (journal) {
      return (
        <div>
          <h2> {journal.title} </h2>
          <h3> {journal.description} </h3>
          <Page journal={journal}/>
        </div>
      )
    }
  };

  return (
    <div>
      {renderJournal()}
    </div>
  )
};

export default withRouter(Journal);