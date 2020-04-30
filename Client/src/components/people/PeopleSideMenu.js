import React from 'react';
import {
  Layout,
  Menu,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '../../hooks/react-auth0-spa';
import { selectionChanged } from '../../actions/PersonActions';
import Loading from '../core/Loading';

const PeopleSideMenu = () => {
  const { loading, user } = useAuth0();
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people.all);

  if (loading || !user) {
    return <Loading />;
  }

  const renderPeople = () => {
    if (!people) return null;

    return (
      people.map((person) => (
        <Menu.Item
          key={person.uId}
          onClick={(e) => dispatch(selectionChanged(e.key))}
        >
          {person.forename}
          { ' ' }
          {person.surname}
        </Menu.Item>
      ))
    );
  };

  return (
    <Sider
      width="20vw"
      style={{
        overflow: 'auto',
        height: '50vh',
        left: 0,
      }}
    >
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['overview']}
        defaultOpenKeys={['sub1', 'sub2']}
        stlye={{ height: '100%' }}
      >
        <SubMenu
          key="sub1"
          title={(
            <span>
              Menu
            </span>
          )}
        >
          <Menu.Item
            key="overview"
            onClick={(e) => dispatch(selectionChanged(e.key))}
          >
            Overview
          </Menu.Item>
          <Menu.Item
            key="addnew"
            onClick={(e) => dispatch(selectionChanged(e.key))}
          >
            Add new person
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={(
            <span>
              Current People
            </span>
          )}
        >
          {renderPeople()}
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default PeopleSideMenu;
