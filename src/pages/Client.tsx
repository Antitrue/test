import { ClientNewsSidebar, PetSidebar } from '../widgets';
import { defaultCat } from '../shared/assets';

import styles from './Client.module.scss';
import { useLocation } from 'react-router-dom';
import useNavigationClient from '../shared/hooks/useNavigationClient';
import ClientCalendar from './ClientCalendar/ClientCalendar.tsx';
import { useState } from 'react';

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

  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(prev => !prev);
  };

  return (
    <div className={styles.container}>
      <PetSidebar pets={pets} />
      <div className={styles.main}>
        <button className={`${styles.close} ${!showCalendar && styles.open}`} type='button' onClick={toggleCalendar}>
          {showCalendar ? 'Скрыть' : 'Показать'} календарь
        </button>
        <ClientCalendar showCalendar={showCalendar} />
      </div>
      <ClientNewsSidebar />
    </div>
  );
}

export default Client;
