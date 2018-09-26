import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';

const PlaceList = ({ places, onItemDeleted }) => {
    return (
      <FlatList 
        style={styles.listContainer} 
        data={places}
        renderItem={(info) => {
          return (
            <ListItem
              placeName={info.item.name}
              placeImage={info.item.image}
              onItemPressed={() => { onItemDeleted(info.item.key); }}
            />
          );
        }}
      />
    );
};

const styles = StyleSheet.create({
	listContainer: {
    width: '100%'
	}
});

export default PlaceList;
