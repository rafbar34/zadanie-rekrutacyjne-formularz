import React from 'react';

type FormCheckBoxProps = {
  acceptedError: string;
};
export const FormCheckBox = ({acceptedError}: FormCheckBoxProps) => {
  return (
    <div className='form-input__checkbox'>
      <span className={!!acceptedError ? 'form-checkbox__error--border' : ''}>
        <input
          name='isAccepted'
          className='form-input__checkbox--size'
          type='checkbox'
        />
      </span>

      <div className='form-checkbox__title'>Akceptuję Regulamin</div>
      {acceptedError && (
        <div className='form-checkbox__error'>{acceptedError}</div>
      )}
    </div>
  );
};
