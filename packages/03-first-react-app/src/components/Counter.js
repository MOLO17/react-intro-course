import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Button, Icon, Label, Grid } from 'semantic-ui-react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState(({ count }) => {
      const { max, step, onChange } = this.props;

      const nextCount = Math.min(count + step, max);

      onChange(nextCount);

      return { count: nextCount };
    });
  }

  subtract() {
    this.setState(({ count }) => {
      const { min, step, onChange } = this.props;

      const nextCount = Math.max(count - step, min);

      onChange(nextCount);

      return { count: nextCount };
    });
  }

  render() {
    const { count } = this.state;

    return (
      <Grid columns={3} textAlign="center" padded>
        <Button color="red" icon onClick={() => this.subtract()}>
          <Icon name="minus circle" />
        </Button>
        <Label size="massive">{count}</Label>
        <Button color="green" icon onClick={() => this.increment()}>
          <Icon name="add circle" />
        </Button>
      </Grid>
    );
  }
}

Counter.propTypes = {
  step: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func,
};

Counter.defaultProps = {
  step: 1,
  max: Infinity,
  min: -Infinity,
  onChange: () => undefined,
};

export default Counter;
