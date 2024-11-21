import AuthProcess from '../../processes/AuthProcess';

import styles from './SignIn.module.scss';

function SignIn() {
  return (
    <div className={styles.signIn}>
      <AuthProcess />
    </div>
  );
}

export default SignIn;
