import { useFormContext } from 'react-hook-form';

import styles from './CheckboxField.module.scss';

export default function CheckboxField({ isLogin }: { isLogin: boolean }) {
  const { register } = useFormContext();
  return (
    <div className={styles.checkboxField}>
      <label className={styles.checkboxFieldLabel}>
        <input type='checkbox' className={styles.checkboxFieldInput} {...register('isAgree')} />
        {isLogin ? 'Remember me' : 'I have read and agree to the Terms of Service'}
      </label>
      <span className={styles.forgotPasswordLink}>{isLogin ? 'Forgot Password?' : ''}</span>
    </div>
  );
}
