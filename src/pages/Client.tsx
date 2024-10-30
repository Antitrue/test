import { ClientNewsSidebar, PetSidebar, InfoPet } from '../widgets';
import { useLocation } from 'react-router-dom';
import useNavigationClient from '../shared/hooks/useNavigationClient';
import ClientCalendar from './ClientCalendar/ClientCalendar.tsx';
import { useState } from 'react';

import styles from './Client.module.scss';

function Client() {
  const location = useLocation();
  useNavigationClient(location.pathname, 'CLIENT');

  const [showCalendar, setShowCalendar] = useState(false);
  const [petId, setPetId] = useState(0);

  const toggleCalendar = () => {
    setShowCalendar(prev => !prev);
  };

  const getPetId: (id: number) => void = id => {
    setPetId(id);
  };

  return (
    <div className={styles.container}>
      <PetSidebar pets={pets} getPetId={getPetId} />
      <div className={styles.main}>
        <button className={`${styles.close} ${!showCalendar && styles.open}`} type='button' onClick={toggleCalendar}>
          {showCalendar ? 'Скрыть' : 'Показать'} календарь
        </button>
        <ClientCalendar showCalendar={showCalendar} />
        <InfoPet petId={petId} />
      </div>
      <ClientNewsSidebar />
    </div>
  );
}

export default Client;
