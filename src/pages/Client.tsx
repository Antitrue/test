import { ClientNewsSidebar, PetSidebar } from '../widgets';

import styles from './Client.module.scss';
import { useLocation } from 'react-router-dom';
import useNavigationClient from '../shared/hooks/useNavigationClient';
import ClientCalendar from './ClientCalendar/ClientCalendar.tsx';
import { useState } from 'react';

function Client() {
  const location = useLocation();
  useNavigationClient(location.pathname, 'CLIENT');

  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(prev => !prev);
  };

  return (
    <div className={styles.container}>
      <PetSidebar />
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
