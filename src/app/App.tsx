import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import Header from '../widgets/header';
import Footer from '../widgets/Footer/Footer';

const { Content: LayoutContent, Footer: LayoutFooter } = Layout;

function App() {
  return (
    <Layout
      style={{
        minHeight: '100vh',
        maxWidth: '1440px',
        margin: '0 auto',
        background: 'none',
      }}>
      <Header />
      <LayoutContent>
        <Outlet />
      </LayoutContent>
      <LayoutFooter style={{ background: 'none', padding: 0 }}>
        <Footer />
      </LayoutFooter>
    </Layout>
  );
}

export default App;
