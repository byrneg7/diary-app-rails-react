import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router";
import apiClient from "../../services/axiosConfig";

const Journal = ({location, match}) => {
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