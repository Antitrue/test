import Navigation from '../../shared/ui/button/navHeader';
import BurgerMenu from '../burgerMenu';
import UserRole from './UserRole';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import { FC, useEffect, useState } from 'react';

import styles from './styles.module.scss';
import { useLogoutUserMutation } from '../../shared/services/api/auth/authentication.api';
import { useDispatch, useSelector } from 'react-redux';
import { IStateAuth } from '../../shared/services/api/auth/authenticationSlice';
import { authenticationSlice } from '../../shared/services/';
import { removeFromStorageKeys } from '../../shared/services/api/lib/storage.ts';

const Header: FC = () => {
  const { role, isAuth } = useSelector((state: { authenticationSlice: IStateAuth }) => state.authenticationSlice);
  const [burgerMenu, useBurgerMenu] = useState(false);
  const [OutLoginUser] = useLogoutUserMutation();

  const { login } = authenticationSlice.actions;
  const dispatch = useDispatch();
  const token = localStorage.getItem('jwtToken') || sessionStorage.getItem('jwtToken');
  const userRole = localStorage.getItem('role') || sessionStorage.getItem('role');

  useEffect(() => {
    if (token) {
      dispatch(login({ isAuth: true, role: userRole }));
    }
  }, [token]);

  const navigate = useNavigate();

  const handleLogout = async () => {
    await OutLoginUser().unwrap();
    removeFromStorageKeys(['jwtToken', 'role']);
    navigate('/');
  };

  const userSection = isAuth ? (
    <UserRole hasNotifications={true} userRole={role} onLogout={handleLogout} />
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

  const mobileUserRole = isAuth ? (
    <UserRole hasNotifications={true} userRole={role} onLogout={handleLogout} />
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
          {userSection}
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
