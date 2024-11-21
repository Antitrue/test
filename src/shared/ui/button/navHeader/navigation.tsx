import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface link {
  label: string;
  path: string;
}

function Navigation() {
  const links: link[] = [
    { label: 'Главная', path: '/' },
    { label: 'Питомцы', path: '/#pets' },
    { label: 'О нас', path: '/#description' },
    { label: 'Услуги', path: '/#services' },
    { label: 'Записаться на прием', path: '/#appointment' },
    { label: 'Форум', path: '/forum' },
  ];

  return (
    <ul className={styles.linksList}>
      {links.map(link => (
        <li key={link.label}>
          <Link to={link.path}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
