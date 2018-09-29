import React, { Component } from 'react';

import DefaultInput from './UI/DefaultInput';

class PlaceInput extends Component {
  state = {
    placeName: ''
  };

  placeNameChangedHandler = placeName => this.setState({ placeName });

  render() {
    return (
      <DefaultInput
        placeholder={'Place Name'}
        value={this.state.placeName}
        onChangeText={this.placeNameChangedHandler}
      />
    );
  }
}

export default PlaceInput;
