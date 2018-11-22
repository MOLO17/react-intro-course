import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { List, Button, Divider } from 'semantic-ui-react';

import AppContext from '../../contexts/AppContext';
import PassengerListItem from '../../components/PassengerListItem/PassengerListItem';

class PassengersList extends Component {
  static contextType = AppContext;

  handleEditButtonClick(id) {
    const { history } = this.props;

    history.push(`/${id}`);
  }

  render() {
    const { passengersList } = this.context;

    return (
      <>
        <Button fluid as={Link} to="/new-passenger" size="large" color="blue">
          Add passenger
        </Button>
        <Divider />
        <List>
          {passengersList.map(({ id, ...passengerData }) => (
            <PassengerListItem
              key={id}
              {...passengerData}
              onEditButtonClick={() => this.handleEditButtonClick(id)}
            />
          ))}
        </List>
      </>
    );
  }
}

export default PassengersList;
