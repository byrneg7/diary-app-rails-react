import React from 'react';

const HeroRectangle = () => {
  return (
    <g fill="none" fillRule="evenodd">
      <rect width="800" height="450" rx="2" fill="#FFF" filter="url(#dropshadow-1)"
      />
      <rect width="800" height="450" rx="2" fill="#FFF"/>
      <path fill="#DDE7EF" d="M0 32h800v1H0z"/>
      <circle fill="url(#browser-a)" cx="24" cy="16" r="4"/>
      <circle fill="url(#browser-b)" cx="40" cy="16" r="4"/>
      <circle fill="url(#browser-c)" cx="56" cy="16" r="4"/>
      <g filter="url(#browser-d)" transform="translate(505 196)" fillRule="nonzero">
        <path d="M100 100l100-50.426L103.193.762a7.087 7.087 0 0 0-6.393 0L0 49.574 100 100z"
              fill="url(#browser-e)"/>
        <path d="M199 90L99 139.875v-40L199 50v40z" fill="url(#browser-f)"/>
        <path d="M100 139.875L0 90V50l100 49.875v40z" fill="url(#browser-g)"/>
      </g>
      <g strokeWidth="2">
        <path stroke="url(#browser-h)" d="M498.336 298.7l-62.117 30.105L194 208"
              transform="translate(169 54)"/>
        <path d="M511.219 127.805L269 7" stroke="url(#browser-i)" transform="translate(169 54)"
        />
        <path d="M312 157.547L533.512 43" stroke="url(#browser-j)" transform="translate(169 54)"
        />
        <path d="M222 114.547L443.512 0" stroke="url(#browser-k)" transform="translate(169 54)"
        />
        <path d="M0 356.547L221.512 242" stroke="url(#browser-l)" transform="translate(169 54)"
        />
        <path d="M215 319.266L312.031 268" stroke="url(#browser-j)" transform="translate(169 54)"
        />
      </g>
      <g filter="url(#browser-m)" transform="scale(-1 1) rotate(45 -338.122 -406.594)"
         fillRule="nonzero">
        <path d="M52 0L.511 70.268a2.668 2.668 0 0 0-.478 1.987 2.63 2.63 0 0 0 1.076 1.732L52 110V0z"
              fill="url(#browser-e)"/>
        <path d="M103.49 70.27L52 0v110l50.89-36.011a2.637 2.637 0 0 0 1.077-1.732 2.669 2.669 0 0 0-.476-1.987z"
              fill="url(#browser-n)"/>
      </g>
    </g>
  )
};

export default HeroRectangle;