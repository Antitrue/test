import ClientNewsSidebar from '../widgets/client/ClientNewsSidebar';
import PetSidebar from '../widgets/client/PetSidebar';
import { defaultCat } from '../shared/assets';

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
    <div>
      <ClientNewsSidebar />
      <PetSidebar pets={pets} />
    </div>
  );
}

export default Client;
