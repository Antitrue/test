import { Link } from 'react-router-dom';
import Class from './styles.module.scss';

function Navigation() {
  const links: string[] = [
    'Список докторов',
    'Список процедур',
    'Список того',
    'О чем-нибудь',
    'Список сосисок',
    'Контакты',
    'О нас',
    'Форум',
  ];

  return (
    <ul className={Class.linksList}>
      {links.map(link => (
        <li key={link}>
          <Link to={'#'}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
