import Navigation from '../../shared/ui/button/navHeader';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

interface props {
  openMenu: () => void;
}

const Header: React.FC<props> = ({ openMenu }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.desktop}>
          <Navigation />
          <section className={styles.buttons}>
            <Link to={'/sign-in'}>
              <Button type='primary' className={styles.button}>
                Sign In
              </Button>
            </Link>
            <Link to={'/sign-up'}>
              <Button className={styles.button}>Register</Button>
            </Link>
          </section>
        </div>
        <div className={styles.mobile}>
          <button className={styles.buttonBurger} onClick={() => openMenu()}></button>
          <Link to={'/sign-in'}>
            <button className={styles.buttonAuth}>Аккаунт</button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
