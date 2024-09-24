import { useLocation } from 'react-router-dom';
import useNavigationClient from '../shared/hooks/useNavigationClient';

function Manager() {
  const location = useLocation();
  useNavigationClient(location.pathname, 'MANAGER');

  return <div>Привет, я страница менеджера</div>;
}

export default Manager;
