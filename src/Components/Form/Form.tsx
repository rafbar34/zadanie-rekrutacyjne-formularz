import React, {useState} from 'react';
import {formFields} from '../../Forms/form';
import {sendForm} from '../../Services/form.services';
import {FormCheckBox} from './FormCheckBox';
import {FormInput} from './FormInput';
import './FormStyle.css';
import {FormSubmitButton} from './FormSubmitButton';

export const Form = () => {
  const [emailError, setEmailError] = useState<string>('');
  const [telError, setTelError] = useState<string>('');
  const [acceptedError, setAcceptedError] = useState<string>('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (event.target.isAccepted.checked === true) {
      const data = {
        login: event.target.login.value,
        password: event.target.password.value,
        email: event.target.email.value,
        tel: event.target.tel.value,
        isAccepted: event.target.isAccepted.checked,
      };
      if ([...event.target.email.value].includes('@') === false) {
        setEmailError('Nieprawidłowy format adresu e-mail');
        return;
      }
      if (isNaN(Number(event.target.tel.value)) === true) {
        setTelError('Nieprawidłowy numer telefonu');
        return;
      }
      sendForm(data);
      if (event.target.tel.value.length !== 9) {
        setTelError('Nieprawidłowa długość numeru telefonu');
        return;
      }
      alert('Formularz wysłany');
      return;
    }
    setAcceptedError('Wymagana akceptacja regulaminu');
  };

  return (
    <div className='form-container'>
      <div className='form-container__title'>
        FORMULARZ REJESTRACYJNY
        <div className='form-title__box'>
          <div className='form-title-box--border'></div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='form-container__inputs'>
          {formFields.map((formField) => {
            return (
              <div
                key={formField.fieldName}
                className='input--size'>
                <FormInput
                  title={formField.fieldTitle}
                  fieldName={formField.fieldName}
                  required={formField.validation.required}
                  type={formField.fieldType}
                  placeholder={formField.placeHolder}
                  emailError={emailError}
                  telError={telError}
                  isErrorMessageEmail={formField.validation.isErrorMessageEmail}
                  isErrorMessageTel={formField.validation.isErrorMessageTel}
                />
              </div>
            );
          })}
          <FormCheckBox acceptedError={acceptedError} />
        </div>
        <FormSubmitButton />
      </form>
    </div>
  );
};
