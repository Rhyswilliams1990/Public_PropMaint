import React from 'react';
import { Avatar } from 'antd';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const ViewEditPage = ({ uId }) => {
  const person = useSelector((state) => state.people.all.filter((d) => d.uId === uId)[0]);

  return (
    <div>
      <Avatar
        size={64}
        alt={person.forename}
        src={person.pictureUri}
      />
    </div>
  );
};

ViewEditPage.propTypes = {
  uId: PropTypes.node.isRequired,
};

export default ViewEditPage;
