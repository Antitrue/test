import ClientNewsSidebar from '../widgets/client/ClientNewsSidebar';
import PetSidebar from '../widgets/client/PetSidebar';
import { defaultCat } from '../shared/assets';

import styles from './Client.module.scss';

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
