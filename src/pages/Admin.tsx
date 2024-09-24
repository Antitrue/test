import { useLocation } from 'react-router-dom';
import useNavigationClient from '../shared/hooks/useNavigationClient';

function Admin() {
  const location = useLocation();
  useNavigationClient(location.pathname, 'ADMIN');

  return <div>Привет, я страница админа</div>;
}

export default Admin;
