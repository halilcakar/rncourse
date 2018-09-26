import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput';
import PlaceList from './src/components/PlaceList';
import PlaceDetail from './src/components/PlaceDetail';

export default class App extends Component {
	state = {
    places: [],
    selectedPlace: null
	};

	onModalClose = () => {
    this.setState({
      selectedPlace: null
    });
  };
  
  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.find(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  placeAddedHandler = (placeName) => {
    this.setState((prevState) => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri: 'https://s3-ap-southeast-1.amazonaws.com/storage.propsocial.com/property/pictures/3098715/laman_view-cyberjaya-propsocial-2_EYAh-cSstEyUUC1jPc2d_large.jpg'
          }
        })
      };
    });
  };

	render() {
		return (
			<View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.state.selectedPlace} 
          onModalClose={this.onModalClose} 
          onItemDeleted={this.placeDeletedHandler} 
        /> 
				<PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList 
          places={this.state.places} 
          onItemSelected={this.placeSelectedHandler} 
        />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 26,
		backgroundColor: '#F5FCFF',
		justifyContent: 'flex-start',
		alignItems: 'center'
	}
});
