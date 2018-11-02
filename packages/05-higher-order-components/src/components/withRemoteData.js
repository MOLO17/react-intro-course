import React, { Component } from "react";

export default url => BaseComponent =>
  class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        remoteData: null
      };
    }

    async componentWillMount() {
      const response = await fetch(url);
      const remoteData = await response.json();

      this.setState(() => ({ remoteData }));
    }

    render() {
      const { remoteData } = this.state;

      return <BaseComponent {...this.props} remoteData={remoteData} />;
    }
  };
