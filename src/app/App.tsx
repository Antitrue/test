import { Outlet } from 'react-router-dom';
import Header from '../widgets/header';
import BurgerMenu from '../widgets/burgerMenu';

import { useState } from 'react';

import styles from './styles.module.scss';

function App() {
  const [burgerMenu, useBurgerMenu] = useState(false);

  return (
    <>
      <div className={burgerMenu ? styles.disabled : ''}>
        <Header openMenu={() => useBurgerMenu(true)} />
        <Outlet />
      </div>
      <BurgerMenu closeMenu={() => useBurgerMenu(false)} burgerMenu={burgerMenu} />
    </>
  );
}

export default App;
