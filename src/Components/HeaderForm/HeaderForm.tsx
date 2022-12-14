import React from 'react';
import './HeaderFormStyle.css';

export const HeaderForm = () => {
  const name: string = 'Rafal';
  const surrname: string = 'Gołąbek';

  return (
    <div className='header-container'>
      <div>{name + ' ' + surrname}</div>
      <div className='header-container__logo font-lato'>
        formularz rejestracyjny
      </div>
    </div>
  );
};
