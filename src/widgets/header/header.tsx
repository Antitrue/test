import Navigation from '../../shared/ui/button/navHeader';
import BurgerMenu from '../burgerMenu';
import UserRole from './UserRole';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import { useState } from 'react';

import styles from './styles.module.scss';

interface IHeaderProps {
  userLogged?: boolean;
}

const Header: React.FC<IHeaderProps> = ({ userLogged = false }) => {
  const [burgerMenu, useBurgerMenu] = useState(false);

  const userRole = userLogged ? (
    <UserRole hasNotifications={true} userRole={'Client'} />
  ) : (
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
  );

  const mobileUserRole = userLogged ? (
    <UserRole hasNotifications={true} userRole={'Client'} />
  ) : (
    <Link to={'/sign-in'}>
      <button className={styles.buttonAuth}>Аккаунт</button>
    </Link>
  );

  return (
    <>
      <header className={styles.header}>
        <div className={styles.desktop}>
          <Link to={'/'} className={styles.logo} />
          <Navigation />
          {userRole}
        </div>
        <div className={styles.mobile}>
          <button className={styles.buttonBurger} onClick={() => useBurgerMenu(true)}></button>
          {mobileUserRole}
        </div>
      </header>
      <BurgerMenu closeMenu={() => useBurgerMenu(false)} burgerMenu={burgerMenu} />
    </>
  );
};

export default Header;
