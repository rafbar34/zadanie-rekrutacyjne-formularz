export type BFormFieldType = {
  fieldName: string;
  fieldTitle: string;
  placeHolder: string;
  validation: {
    required: boolean;
    //zamiast error message, można użyć dla input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
    // pattern?: string;
    isErrorMessageEmail?: boolean | undefined;
    isErrorMessageTel?: boolean | undefined;
  };
  fieldType: string;
};

export const formFields: BFormFieldType[] = [
  {
    fieldTitle: 'Login',
    fieldName: 'login',
    fieldType: 'text',
    placeHolder: 'Podaj Login',
    validation: {
      required: true,
    },
  },
  {
    fieldTitle: 'Hasło',
    fieldName: 'password',
    fieldType: 'password',
    placeHolder: 'Proszę podać hasło',
    validation: {
      required: true,
    },
  },
  {
    fieldTitle: 'E-mail',
    fieldName: 'email',
    //na potrzeby zadania rekrutacyjnego zmieniam typ "email" na text, aby mógł się wyświetlić error
    fieldType: 'text',
    placeHolder: 'Proszę podać adres E-mail',
    validation: {
      required: false,
      isErrorMessageEmail: true,
    },
  },
  {
    fieldTitle: 'Numer Telefonu',
    fieldName: 'tel',
    fieldType: 'tel',
    placeHolder: 'Proszę podać numer telefonu',
    validation: {
      required: true,
      //zamiast error message, można użyć dla input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
      // pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}"
      isErrorMessageTel: true,
    },
  },
];
