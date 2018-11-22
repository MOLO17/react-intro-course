import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import EditPassengerForm from '../EditPassengerForm/EditPassengerForm';
import NewPassengerForm from '../NewPassengerForm/NewPassengerForm';
import FormPlaceholder from '../FormPlaceholder/FormPlaceholder';

export default () => (
  <Switch>
    <Route path="/new-passenger" component={NewPassengerForm} />
    <Route path="/:passengerId" component={EditPassengerForm} />
    <Route exact path="/" component={FormPlaceholder} />

    <Redirect to="/" />
  </Switch>
);
