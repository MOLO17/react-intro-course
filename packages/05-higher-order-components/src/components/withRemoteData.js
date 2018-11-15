import React, { Component } from 'react';

export default (url, mapRemoteDataToProps) => WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        remoteData: undefined,
      };
    }

    async componentDidMount() {
      const response = await fetch(url);
      const remoteData = await response.json();

      this.setState(() => ({ remoteData }));
    }

    render() {
      const { remoteData } = this.state;

      return (
        <WrappedComponent
          {...this.props}
          {...mapRemoteDataToProps(remoteData)}
        />
      );
    }
  };
