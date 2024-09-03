import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface link {
  label: string;
  path: string;
}

function Navigation() {
  const links: link[] = [
    { label: 'Список докторов', path: '#' },
    { label: 'Список процедур', path: '#' },
    { label: 'Список того', path: '#' },
    { label: 'О чем-нибудь', path: '#' },
    { label: 'Список сосисок', path: '#' },
    { label: 'Контакты', path: '#' },
    { label: 'О нас', path: '#' },
    { label: 'Форум', path: '#' },
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
