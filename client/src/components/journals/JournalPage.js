import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";

import { openModal } from "../modals/openModal";
import apiClient from "../../services/axiosConfig";

const JournalPage = () => {
  const dispatch = useDispatch();
  const [journals, setJournals] = useState(null);
  useEffect(() => {
    apiClient.get('/journals', {withCredentials: true})
      .then(res => {
        setJournals(res.data.journals)
      })
      .catch(err => console.log(err))
  }, []);

  const renderJournals = () => {
    if (journals && journals.length > 0) {
      return journals.map(journal => {
        return (
          <h4>{journal.title}</h4>
        )
      })
    } else {
      return 'no journals'
    }
  };

  return (
    <>
      <h1> journal page </h1>
      <div className='btn btn-danger' onClick={() => openModal(dispatch, 'journal')}>
        journal modal
      </div>

      <hr/>
      <h1> your journals </h1>
      {renderJournals()}
    </>
  )
};

export default JournalPage;