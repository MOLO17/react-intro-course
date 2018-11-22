import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import { v4 as uuid } from 'uuid';

import './App.css';

import PassengersList from '../PassengersList/PassengersList';
import Router from '../Router/Router';

import { AppContextProvider } from '../../contexts/AppContext';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passengersList: [],
      addPassenger: this.addPassenger.bind(this),
    };
  }

  addPassenger({ firstName, lastName, age }) {
    this.setState(({ passengersList }) => ({
      passengersList: [
        ...passengersList,
        {
          id: uuid(),
          firstName,
          lastName,
          age,
        },
      ],
    }));
  }

  render() {
    return (
      <AppContextProvider value={this.state}>
        <BrowserRouter>
          <main className="container">
            <section className="list">
              <Route component={PassengersList} />
            </section>
            <section className="form">
              <Router />
            </section>
          </main>
        </BrowserRouter>
      </AppContextProvider>
    );
  }
}

export default App;
