import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';

export default class App extends Component {
    state = {
		placeName: '',
		places: []
    };

    placeNameChangedHandler = event => {
        this.setState({ placeName: event });
	};
	
	placeSubmitHandler = () => {
		if(this.state.placeName.trim() === '') { return; }

		this.setState(prevState => {
			return {
				placeName: '',
				places: prevState.places.concat(prevState.placeName)
			}
		});
	};

    render() {
		const placesOutput = this.state.places.map((place, i) => (<Text key={i}>{place}</Text>));
        return (
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput 
						style={styles.textInput} 
						placeholder={"An awesome place!"} 
						value={this.state.placeName} 
						onChangeText={this.placeNameChangedHandler} />
					<Button 
						title={"Add"} 
						style={styles.placeButton}
						onPress={this.placeSubmitHandler}
					/>
				</View>
				<View style={{marginTop: 30}}> 
					{placesOutput}
				</View>
			</View>
		);
    }
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
		padding: 26,
		backgroundColor: "#F5FCFF",
		justifyContent: "flex-start",
		alignItems: "center"
	},
	inputContainer: {
		width: '100%',
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: 'center'
	},
	textInput: {
		height: 40,
		width: '70%',
		borderBottomWidth: 1,
		borderColor: '#ddd',
	},
	placeButton: {
		width: '30%'
	}
});
