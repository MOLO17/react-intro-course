import React from 'react';

import PropTypes from 'prop-types';

import {
  Card,
  CardContent,
  CardHeader,
  CardMeta,
  List,
  ListItem,
} from 'semantic-ui-react';

const UserCard = ({ username, name, email, phone, website, companyName }) => (
  <Card>
    <CardContent>
      <CardHeader>{username}</CardHeader>
      <CardMeta>{name}</CardMeta>
    </CardContent>
    <CardContent>
      <List>
        <ListItem>
          <b>Email:</b> {email}
        </ListItem>
        <ListItem>
          <b>Phone:</b> {phone}
        </ListItem>
        <ListItem>
          <b>Website:</b> {website}
        </ListItem>
        <ListItem>
          <b>Company:</b> {companyName}
        </ListItem>
      </List>
    </CardContent>
  </Card>
);

UserCard.propTypes = {
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
};

export default UserCard;
