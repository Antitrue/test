import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Header, Footer, Anchor } from '../widgets';

const { Content: LayoutContent, Footer: LayoutFooter } = Layout;

function App() {
  return (
    <Layout
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1440px',
        minHeight: '100vh',
        margin: '0 auto',
        background: 'none',
      }}>
      <Anchor />
      <Header />
      <LayoutContent style={{ display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </LayoutContent>
      
      <LayoutFooter style={{ background: 'none', padding: 0 }}>
        <Footer />
      </LayoutFooter>
    </Layout>
  );
}

export default App;
