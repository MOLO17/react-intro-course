import React from 'react';

import PropTypes from 'prop-types';

import withRemoteData from './withRemoteData';
import UserCardList from './UserCardList';

const mapRemoteUserToLocalUser = ({
  id,
  username = 'N/A',
  name = 'N/A',
  phone = 'N/A',
  email = 'N/A',
  website = 'N/A',
  company: { name: companyName = 'N/A' } = {},
}) => ({
  id: `${id}`,
  username,
  name,
  phone,
  email,
  website,
  companyName,
});

const RemoteUserList = ({ limit }) => {
  const AugmentedUserCardList = withRemoteData(
    `https://jsonplaceholder.typicode.com/users?_limit=${limit}`,
    (userList = []) => ({ userList: userList.map(mapRemoteUserToLocalUser) }),
  )(UserCardList);

  return <AugmentedUserCardList />;
};

RemoteUserList.propTypes = {
  limit: PropTypes.number.isRequired,
};

export default RemoteUserList;
