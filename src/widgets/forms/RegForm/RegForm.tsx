import { useForm, FormProvider } from 'react-hook-form';

import CardWrapper from '../ui/CardWrapper/CardWrapper';
import FormHeader from '../ui/FormHeader/FormHeader';
import FormFooter from '../ui/FormFooter/FormFooter';
import InputField from '../ui/InputField/InputField';
import CheckboxField from '../ui/CheckboxField/CheckboxField';

import { InputsTypes } from '../ui/InputField/InputFieldTypes';
import styles from './RegForm.module.scss';

const RegForm = ({}) => {
  const methods = useForm<InputsTypes>({
    mode: 'onBlur',
    defaultValues: {
      full: '',
      email: '',
      password: '',
      isAgree: true,
    },
  });

  return (
    <FormProvider {...methods}>
      <CardWrapper>
        <form className={styles.form}>
          <FormHeader isLogin />
          <InputField type='full' label='Full Name' name='full' placeholder='John Doe' />
          <InputField type='email' label='Email Adress' name='email' placeholder='johndoe@gmail.com' />
          <InputField type='password' label='Password' name='password' placeholder='*******' />
          <InputField type='password' label='Confirm Password' name='password' placeholder='*******' />
          <CheckboxField isLogin />
          <FormFooter isLogin={false} linkTo='/sign-in' />
        </form>
      </CardWrapper>
    </FormProvider>
  );
};

export default RegForm;
