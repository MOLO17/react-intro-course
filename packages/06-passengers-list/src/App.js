import React, { Component } from "react";
import { v4 as uuid } from "uuid";

import "./App.css";

import PassengerCard from "./components/PassengerCard";

const PASSENGERS = [
  {
    id: uuid(),
    firstName: "John",
    lastName: "Doe",
    age: 32
  },
  {
    id: uuid(),
    firstName: "Kid",
    lastName: "Doe",
    age: 4
  },
  {
    id: uuid(),
    firstName: "Jane",
    lastName: "Doe",
    age: 27
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passengers: PASSENGERS,
      checkedInIds: []
    };
  }

  addPassenger({ firstName, lastName, age }) {
    this.setState(({ passengers }) => ({
      passengers: [
        ...passengers,
        {
          firstName,
          lastName,
          age,
          id: uuid()
        }
      ]
    }));
  }

  updatePassengerCheckInStatus(passengerId, checkedIn) {
    this.setState(({ checkedInIds }) => ({
      checkedInIds: checkedIn
        ? [...checkedInIds, passengerId]
        : checkedInIds.filter(id => id !== passengerId)
    }));
  }

  render() {
    const { passengers, checkedInIds } = this.state;

    return (
      <>
        {passengers.map(({ id, ...props }) => {
          const checkedIn = checkedInIds.indexOf(id) >= 0;

          return (
            <PassengerCard
              {...props}
              key={id}
              checkedIn={checkedIn}
              onCheck={() => this.updatePassengerCheckInStatus(id, !checkedIn)}
            />
          );
        })}
      </>
    );
  }
}

export default App;
