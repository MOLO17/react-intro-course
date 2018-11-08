import React, { Component } from "react";
import { Button, Card, Label, CardContent, Divider } from "semantic-ui-react";

const format = time => `${time}`.padStart(2, "0");

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deciseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
      running: false
    };

    this.timer = null;
  }

  startTimer() {
    this.setState(() => ({ running: true }));

    this.timer = setInterval(() => {
      this.setState(({ deciseconds, seconds, minutes, hours }) => {
        let nextStatePatch = {
          deciseconds: deciseconds < 9 ? deciseconds + 1 : 0
        };

        if (deciseconds === 9) {
          nextStatePatch = {
            ...nextStatePatch,
            seconds: seconds < 59 ? seconds + 1 : 0
          };
        }

        if (seconds === 59) {
          nextStatePatch = {
            ...nextStatePatch,
            minutes: minutes < 59 ? minutes + 1 : 0
          };
        }

        if (minutes === 59) {
          nextStatePatch = {
            ...nextStatePatch,
            hours: hours < 59 ? hours + 1 : 0
          };
        }

        return nextStatePatch;
      });
    }, 100);
  }

  pauseTimer() {
    clearInterval(this.timer);

    this.setState(() => ({ running: false }));
  }

  resetTimer() {
    this.setState(() => ({
      deciseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0
    }));
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.pauseTimer();
    this.resetTimer();
  }

  render() {
    const { deciseconds, seconds, minutes, hours, running } = this.state;

    return (
      <Card>
        <CardContent textAlign="center">
          <Label size="massive">
            {format(hours)} : {format(minutes)} : {format(seconds)} :{" "}
            {format(deciseconds)}
          </Label>
          <Divider />
          <div className="ui two buttons">
            {running ? (
              <Button color="yellow" onClick={() => this.pauseTimer()}>
                PAUSE
              </Button>
            ) : (
              <Button color="green" onClick={() => this.startTimer()}>
                START
              </Button>
            )}
            <Button color="red" onClick={() => this.resetTimer()}>
              RESET
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default Timer;
