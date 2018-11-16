import React from 'react';

import PropTypes from 'prop-types';

import { Grid, GridColumn } from 'semantic-ui-react';

import UserCard from './UserCard';

const UserCardList = ({ userList }) => (
  <Grid columns={2}>
    {userList.map(({ id, ...user }) => (
      <GridColumn key={id}>
        <UserCard {...user} />
      </GridColumn>
    ))}
  </Grid>
);

UserCardList.propTypes = {
  userList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
      companyName: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default UserCardList;
