import { useLocation } from 'react-router-dom';
import useNavigationClient from '../shared/hooks/useNavigationClient';

function Doctor() {
  const location = useLocation();
  useNavigationClient(location.pathname, 'DOCTOR');
  return <div>Привет, я страница доктора</div>;
}

export default Doctor;
