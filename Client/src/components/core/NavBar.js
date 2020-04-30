import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { useAuth0 } from '../../hooks/react-auth0-spa';
import './NavBar.css';

const NavBar = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    loading,
  } = useAuth0();
  const { Header } = Layout;

  const styles = {
    menuContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
    },
  };

  const renderMenu = () => {
    if (loading) {
      return (
        <Loading />
      );
    }

    return (
      <>
        {!isAuthenticated && (
          <Menu theme="dark" mode="horizontal" style={styles.menuContainer}>
            <Menu.Item
              key="4"
              style={{ marginLeft: 'auto' }}
              onClick={() => loginWithRedirect({})}
            >
              Log in
            </Menu.Item>
          </Menu>
        )}
        {isAuthenticated
          && (
            <Menu theme="dark" mode="horizontal" style={styles.menuContainer}>
              <Menu.Item key="1">
                <Link to="/people">People</Link>
              </Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
              <Menu.Item
                key="4"
                style={{ marginLeft: 'auto' }}
                onClick={() => logout()}
              >
                Log out
              </Menu.Item>
            </Menu>
          )}
      </>
    );
  };

  return (
    <Layout>
      <Header className="header">
        <Link to="/">
          <div className="logo">
            LetsManage
          </div>
        </Link>
        {renderMenu()}
      </Header>
    </Layout>
  );
};

export default NavBar;
