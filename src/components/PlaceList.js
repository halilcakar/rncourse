import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ListItem from './ListItem';

const PlaceList = ({ places, onItemDeleted }) => {
    const placesOutput = places.map((place, i) => (
        <ListItem 
            key={i}
            placeName={place} 
            onItemPressed={() => { onItemDeleted(i); }} 
        />
    ));
    return (
        <ScrollView style={styles.listContainer}> 
          {placesOutput} 
        </ScrollView>
    );
};

const styles = StyleSheet.create({
	listContainer: {
    width: '100%'
	}
});

export default PlaceList;
