import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

const PeopleContent = ({ children }) => {
  const { Content } = Layout;

  return (
    <Content style={{ padding: '24px 24px', minHeight: 280 }} className="site-layout-background">
      {children}
    </Content>
  );
};

PeopleContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PeopleContent;
