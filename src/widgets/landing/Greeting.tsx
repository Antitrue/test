import { Button } from 'antd';
import fns from '../../shared/lib/helpers';

import styles from './styles.module.scss';

function Greeting() {
  return (
    <div className={styles.container}>
      <h1 className={styles.headerText}>
        Мы заботимся <br /> о здоровье <br />{' '}
        <span className={styles.headerText__lastLine}>{fns.FnToUpperCase('ваших питомцев')}</span>
      </h1>
      <Button type='primary' className={styles.button}>
        {fns.FnToUpperCase('записаться на приём')}
      </Button>
    </div>
  );
}

export default Greeting;
