import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import debounce from 'lodash.debounce';

const Anchor: FC = () => {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = debounce(() => {
      const hash = location?.hash;
      const elem = hash && document.getElementById(hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);

    handleScroll();

    return () => {
      handleScroll.cancel();
    };
  }, [location]);

  return null;
};

export default Anchor;
