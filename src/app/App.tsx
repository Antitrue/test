import { Outlet } from 'react-router-dom';
import Header from '../widgets/header';

function App() {
  return (
    <>
      <div>
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default App;
