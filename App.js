import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput';
import PlaceList from './src/components/PlaceList';

export default class App extends Component {
    state = {
		places: []
    };

	placeAddedHandler = (placeName) => {
		this.setState((prevState) => {
			return {
				places: prevState.places.concat(placeName)
			};
		});
	};

    render() {
        return (
			<View style={styles.container}>
				<PlaceInput onPlaceAdded={this.placeAddedHandler} />
				<PlaceList places={this.state.places} />
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
