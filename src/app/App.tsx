import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import UserRole from '../widgets/Header/UserRole';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout
      style={{
        minHeight: '100vh',
        maxWidth: '1440px',
        margin: '0 auto',
        background: 'none',
      }}>
      <Header style={{ background: 'none' }}>
        <UserRole />
      </Header>
      <Content
        style={{
          background: 'none',
          maxWidth: '960px',
          width: '100%',
          alignSelf: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Outlet />
      </Content>
      <Footer style={{ background: 'none' }}>Footer</Footer>
    </Layout>
  );
}

export default App;
