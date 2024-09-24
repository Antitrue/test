import { useFormContext } from 'react-hook-form';
import { Link } from 'react-router-dom';

import styles from './CheckboxField.module.scss';

export default function CheckboxField({ isLogin }: { isLogin: boolean }) {
  const { register } = useFormContext();
  return (
    <div className={styles.checkboxField}>
      <label className={styles.checkboxFieldLabel}>
        <input type='checkbox' className={styles.checkboxFieldInput} {...register('isAgree', { required: true })} />
        {isLogin ? (
          'Remember me'
        ) : (
          <div>
            I have read and agree to the <Link to=''>Terms of Service</Link>
          </div>
        )}
      </label>
      <span className={styles.forgotPasswordLink}>{isLogin ? 'Forgot Password?' : ''}</span>
    </div>
  );
}
