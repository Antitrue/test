import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import Header from '../widgets/header';
import Footer from '../widgets/Footer/Footer';

const { Content: LayoutContent, Footer: LayoutFooter } = Layout;

function App() {
  return (
    <Layout>
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
