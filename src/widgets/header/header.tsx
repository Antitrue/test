import Navigation from '../../shared/ui/button/navHeader';
import BurgerMenu from '../burgerMenu';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import { useState } from 'react';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  const [burgerMenu, useBurgerMenu] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.desktop}>
          <Link to={'/'} className={styles.logo} />
          <Navigation />
          <section className={styles.buttons}>
            <Link to={'/sign-in'}>
              <Button type='primary' className={styles.button}>
                Sign In
              </Button>
            </Link>
            <Link to={'/sign-up'}>
              <Button className={styles.button} style={{ color: '#3a4045', borderColor: '#3a4045' }}>
                Register
              </Button>
            </Link>
          </section>
        </div>
        <div className={styles.mobile}>
          <button className={styles.buttonBurger} onClick={() => useBurgerMenu(true)}></button>
          <Link to={'/sign-in'}>
            <button className={styles.buttonAuth}>Аккаунт</button>
          </Link>
        </div>
      </header>
      <BurgerMenu closeMenu={() => useBurgerMenu(false)} burgerMenu={burgerMenu} />
    </>
  );
};

export default Header;
