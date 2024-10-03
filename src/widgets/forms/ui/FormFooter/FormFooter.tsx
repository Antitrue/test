import { useFormContext } from 'react-hook-form';
import { Link } from 'react-router-dom';

import styles from './FormFooter.module.scss';

export default function FormFooter({ isLogin, linkTo }: { isLogin: boolean; linkTo: string }) {
  const {
    formState: { isValid },
  } = useFormContext();

  return (
    <div className={styles.formFooter}>
      <button type='submit' className={styles.formSubmit} disabled={isLogin ? false : !isValid}>
        {isLogin ? 'Log In' : 'Get Started'}
      </button>
      <p className={styles.formFooterText}>
        {isLogin ? 'Don’t have an account?' : 'Already have an account?'}
        <span>
          <Link to={linkTo}>{isLogin ? ' Sign Up' : ' Sign In'}</Link>
        </span>
      </p>
    </div>
  );
}
