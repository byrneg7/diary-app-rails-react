import React, { useEffect, useState } from 'react';

import axios from 'axios';

const ListsContainer = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/lists.json')
      .then(res => {
        console.log(res)
        setLists(res.data)
      })
      .catch(error => console.log(error))
  }, []);

  return (
    <div className="Lists-container">
      Lists
    </div>
  )
};

export default ListsContainer;