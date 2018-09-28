import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class PlaceInput extends Component {
  state = {
    placeName: ''
  };

  componentDidMount() {
    
  }

  placeNameChangedHandler = placeName => this.setState({ placeName });

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    console.log(this.state.placeName);
    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='An awesome place'
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
        />
        <Button
          title='Add'
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10
  },
  placeInput: {
    width: '70%',
    height: 40
  },
  placeButton: {
    width: '30%'
  }
});

export default PlaceInput;
