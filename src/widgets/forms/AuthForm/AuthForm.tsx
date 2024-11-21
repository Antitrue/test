import { useForm, FormProvider } from 'react-hook-form';

import CardWrapper from '../ui/CardWrapper/CardWrapper';
import FormHeader from '../ui/FormHeader/FormHeader';
import FormFooter from '../ui/FormFooter/FormFooter';
import InputField from '../ui/InputField/InputField';
import CheckboxField from '../ui/CheckboxField/CheckboxField';

import { AuthPorps } from './AuthFormProps';
import { InputsTypes } from '../ui/InputField/InputFieldTypes';
import styles from './AuthForm.module.scss';

export default function AuthForm({ onSubmit }: AuthPorps) {
  const methods = useForm<InputsTypes>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      isAgree: true,
    },
  });

  return (
    <FormProvider {...methods}>
      <CardWrapper>
        <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
          <FormHeader isLogin />
          <InputField type='email' label='Email Adress' name='email' placeholder='johndoe@gmail.com' />
          <InputField type='password' label='Password' name='password' placeholder='*******' />
          <CheckboxField isLogin />
          <FormFooter isLogin linkTo='/sign-up' />
        </form>
      </CardWrapper>
    </FormProvider>
  );
}
