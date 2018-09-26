import React from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import ListItem from './ListItem';

const PlaceList = ({ places }) => {
    const placesOutput = places.map((place, i) => (
        <ListItem 
            key={i}
            placeName={place} 
            onItemPressed={() => { Alert.alert('Alert', `ID: ${i}`); }} 
        />
    ));
    return (
        <View style={styles.listContainer}> 
            {placesOutput}
        </View>
    );
};

const styles = StyleSheet.create({
	listContainer: {
		width: '100%'
	}
});

export default PlaceList;
