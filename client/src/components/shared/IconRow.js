import React from 'react'

const IconRow = () => {

  const ICON_DATA = [
    {
      icon: 'icon-browser',
      title: 'Create your own template',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
      icon: 'icon-download',
      title: 'Automatic Backup Data',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
      icon: 'icon-layers',
      title: 'Page Builder',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
  ];

  const renderIcons = () => ICON_DATA.map(({ icon, title, description }) =>
    <div className="col-md-4 text-center animate-box">
      <div className="services">
        <span className="icon">
          <i className={icon}/>
        </span>
        <div className="desc">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="colorlib-services colorlib-bg-white">
      <div className="container">
        <div className="row">
          {renderIcons()}
        </div>
      </div>
    </div>
  )
};

export default IconRow;