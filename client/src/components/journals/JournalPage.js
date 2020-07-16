import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import uniqId from 'uniqid'
import { openModal } from "../modals/openModal";
import apiClient from "../../services/axiosConfig";
import { Link } from "react-router-dom";

const JournalPage = () => {
  const dispatch = useDispatch();
  const [journals, setJournals] = useState(null);
  useEffect(() => {
    apiClient.get('/journals', {withCredentials: true})
      .then(res => {
        setJournals(res.data)
      })
      .catch(err => console.log(err))
  }, []);

  const renderJournals = () => {
    if (journals && journals.length > 0) {
      return journals.map(journal => {
        return (
          <Link to={`/journals/${journal.id}`} className='my-2' key={uniqId()}>
            <h4>{journal.title}</h4>
          </Link>
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