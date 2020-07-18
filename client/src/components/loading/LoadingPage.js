import React from 'react';

import './loadingPage.scss';

const LoadingPage = () => {
  return (
    <div className='flex-full-height'>
      <div className='fullpage-loading'>
        <div className="fullpage-loading spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  )
};

export default LoadingPage;