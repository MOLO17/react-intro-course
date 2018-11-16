import React from 'react';

import withRemoteData from './withRemoteData';
import UserCardList from './UserCardList';

const mapRemoteUserToLocalUser = ({
  username = 'N/A',
  name = 'N/A',
  phone = 'N/A',
  email = 'N/A',
  website = 'N/A',
  company: { name: companyName = 'N/A' } = {},
}) => ({
  username,
  name,
  phone,
  email,
  website,
  companyName,
});

const RemoteUserList = () => {
  const AugmentedUserCardList = withRemoteData(
    'https://jsonplaceholder.typicode.com/users?_limit=8',
    (userList = []) => ({ userList: userList.map(mapRemoteUserToLocalUser) }),
  )(UserCardList);

  return <AugmentedUserCardList />;
};

export default RemoteUserList;
