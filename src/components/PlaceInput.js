import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class PlaceInput extends Component {

    state = {
		placeName: ''
    };

    placeNameChangedHandler = event => {
        this.setState({ placeName: event });
    };
    
    placeSubmitHandler = () => {
		if (this.state.placeName.trim() === '') { return; }

		this.props.onPlaceAdded(this.state.placeName);
	};

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder={'An awesome place!'} 
                    value={this.state.placeName} 
                    onChangeText={this.placeNameChangedHandler} 
                />
                <Button 
                    title={'Add'} 
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
	},
});

export default PlaceInput;
