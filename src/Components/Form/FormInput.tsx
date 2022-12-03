import React from 'react';
type FormInputProps = {
  title: string;
  type: string;
  fieldName: string;
  required: boolean;
  telError: string;
  placeholder: string;
  emailError: string;
  isErrorMessageEmail: boolean | undefined;
  isErrorMessageTel: boolean | undefined;
};

export const FormInput = ({
  title,
  fieldName,
  required,
  type,
  placeholder,
  emailError,
  telError,
  isErrorMessageEmail,
  isErrorMessageTel,
}: FormInputProps) => {
  return (
    <>
      <div className='form-input__title'>{title}:</div>
      <div className='form-input__box'>
        <input
          name={fieldName}
          className='form-box__input--props'
          placeholder={placeholder}
          type={type}
          required={required}
        />
      </div>
      {isErrorMessageEmail && (
        <div className='form-input__error'>
          <div className='form-input__error--message'>{emailError}</div>
        </div>
      )}
      {isErrorMessageTel && (
        <div className='form-input__error'>
          <div className='form-input__error--message'>{telError}</div>
        </div>
      )}
    </>
  );
};
