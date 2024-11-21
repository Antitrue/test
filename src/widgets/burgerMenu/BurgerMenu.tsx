import Navigation from '../../shared/ui/button/navHeader';
import { Button, Divider, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

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
        <Avatar size={100} icon={<UserOutlined style={{ color: '#3A4045' }} />} style={{ background: 'white' }} />
        <Link to={'/sign-in'}>
          <Button type='primary' className={styles.button}>
            Sign In
          </Button>
        </Link>
      </div>
      <Navigation />
      <Divider className={styles.divider} />
    </section>
  );
};

export default BurgerMenu;
