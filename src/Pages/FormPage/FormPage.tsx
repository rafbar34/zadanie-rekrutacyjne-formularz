import React from 'react';
import { AvatarForm } from '../../Components/AvatarForm/AvatarForm';
import { Form } from '../../Components/Form/Form';
import { HeaderForm } from '../../Components/HeaderForm/HeaderForm';
import "./FormPageStyle.css"
export const FormPage = () => {
    return (
        <div className='form-page-container'>
            <HeaderForm />
            <AvatarForm />
            <Form/>
        </div>
    )
}