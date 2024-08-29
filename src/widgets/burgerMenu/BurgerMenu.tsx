import Navigation from '../../shared/ui/button/navHeader';
import UserAvatar from '../../shared/ui/button/userAvatar';
import { Button, Divider } from 'antd';

import styles from './styles.module.scss';
import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';

interface props {
  closeMenu: () => void;
  burgerMenu: boolean;
}

const BurgerMenu: React.FC<props> = ({ closeMenu, burgerMenu }) => {
  useEffect(() => {
    closeMenu();
  }, [useLocation()]);

  return (
    <section className={burgerMenu ? `${styles.menu} ${styles.open}` : styles.menu}>
      <div className={styles.pofile}>
        <button className={styles.buttonBack} onClick={() => closeMenu()}>
          Назад
        </button>
        <UserAvatar size={100} />
        <Link to={'/sign-in'}>
          <Button type='primary' style={{ width: '200px', height: '40px' }}>
            Sign In
          </Button>
        </Link>
      </div>
      <Navigation />
      <Divider style={{ border: '1px solid #D9D9D9', margin: '0 auto', minWidth: '90%', width: '90%' }} />
    </section>
  );
};

export default BurgerMenu;
