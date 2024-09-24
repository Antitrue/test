import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useNavigationClient(location: string, role: string) {
  const navigate = useNavigate();
  const userRole = localStorage.getItem('role');

  useEffect(() => {
    if (userRole !== role || location !== `/${userRole?.toLocaleLowerCase()}`) {
      alert('Страница недоступна');
      if (userRole) navigate(`/${userRole?.toLocaleLowerCase()}`, { replace: true });
      navigate(`/`, { replace: true });
    }
  }, [navigate, location, userRole]);
}

export default useNavigationClient;
