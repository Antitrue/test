import formLogo from '../../../../shared/assets/images/logo.png';
import styles from './FormHeader.module.scss';

export default function FormHeader({ isLogin }: { isLogin: boolean }) {
  return (
    <div className={styles.formHeader}>
      <img className={styles.formImage} src={formLogo} alt='formLogo' />
      <h2 className={styles.formTitle}>{isLogin ? 'Log in to your Account' : ''}</h2>
      <p className={`${styles.formText} ${isLogin ? styles.hideOnSmallScreen : ''}`}>
        {isLogin ? 'Welcome back, please enter your details.' : ''}
      </p>
    </div>
  );
}
