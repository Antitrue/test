import { ClientNewsSidebar, PetSidebar } from '../widgets';
import { defaultCat } from '../shared/assets';

import styles from './Client.module.scss';
import { useLocation } from 'react-router-dom';
import useNavigationClient from '../shared/hooks/useNavigationClient';

const pets = [
  {
    name: 'Черничка',
    icon: <img src={defaultCat} />,
  },
  {
    name: 'Клубничка',
    icon: null,
  },
  {
    name: 'Вредина',
    icon: null,
  },
  {
    name: 'Кекич',
    icon: null,
  },
];

function Client() {
  const location = useLocation();
  useNavigationClient(location.pathname, 'CLIENT');

  return (
    <div className={styles.container}>
      <PetSidebar pets={pets} />
      <div>
        <h1 style={{ textAlign: 'center' }}>Main content</h1>
      </div>
      <ClientNewsSidebar />
    </div>
  );
}

export default Client;
