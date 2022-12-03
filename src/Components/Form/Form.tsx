import React, {useState} from 'react';
import {formFields} from '../../Forms/form';
import {sendForm} from '../../Services/form.services';
import './FormStyle.css';

export const Form = () => {
  const [emailError, setEmailError] = useState<string>('');
  const [telError, setTelError] = useState<string>('');
  const [acceptError, setAcceptError] = useState<string>('');
  console.log(acceptError);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (event.target.isAccept.checked === true) {
      const data = {
        login: event.target.login.value,
        password: event.target.password.value,
        email: event.target.email.value,
        tel: event.target.tel.value,
        isAccept: event.target.isAccept.checked,
      };
      console.log(data);
      if ([...event.target.email.value].includes('@') === false) {
        setEmailError('Nieprawidłowy format adresu e-mail');
      }
      if (isNaN(Number(event.target.tel.value)) === true) {
        setTelError('Nieprawidłowy numer telefonu');
      }
      sendForm(data);
      return;
    }
    setAcceptError('Wymagana akceptacja regulaminu');
  };
  return (
    <div className='form-container'>
      <div className='form-title'>FORMULARZ REJESTRACYJNY</div>
      <form onSubmit={handleSubmit}>
        <div className='form-inputs'>
          {formFields.map((formField) => {
            return (
              <>
                <div className='form-inputs-titles'>{formField.fieldName}:</div>
                <div className='form-box-input'>
                  <input
                    name={formField.fieldName}
                    className='form-input'
                    placeholder={formField.placeHolder}
                    type={formField.fieldType}
                    required={formField.validation.required}
                  />
                </div>
                {formField.validation.isErrorMessageEmail && (
                  <div className='form-inputs-error'>
                    <div className='form-inputs-error-message'>
                      {emailError}
                    </div>
                  </div>
                )}
                {formField.validation.isErrorMessageTel && (
                  <div className='form-inputs-error'>
                    <div className='form-inputs-error-message'>{telError}</div>
                  </div>
                )}
              </>
            );
          })}
          <div className='form-inputs-box-checkbox'>
            <input
              name='isAccept'
              className='form-inputs-checkbox'
              type='checkbox'
            />
            <div className='form-inputs-title-checkbox'>
              Akceptuję Regulamin
            </div>
            {acceptError && (
              <div className='form-inputs-error-checkbox'>{acceptError}</div>
            )}
          </div>
        </div>
        <div className='form-box-button'>
          <button
            className='form-button'
            type='submit'>
            Zapisz
          </button>
        </div>
      </form>
    </div>
  );
};
