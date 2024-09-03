import { SubmitHandler } from 'react-hook-form';

import { useLoginUserMutation } from '../shared/services/api/auth/authentication.api';
import { InputsTypes } from '../widgets/forms/ui/InputField/InputFieldTypes';
import AuthForm from '../widgets/forms/AuthForm/AuthForm';

function AuthProcess() {
  const [loginUser] = useLoginUserMutation();

  const handleSubmit: SubmitHandler<InputsTypes> = async data => {
    const { email: username, password, isAgree: rememberMe } = data;
    loginUser({ body: { username, password }, rememberMe });
  };

  return <AuthForm onSubmit={handleSubmit} />;
}

export default AuthProcess;
