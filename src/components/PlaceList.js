import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from './ListItem';

const PlaceList = props => (
  <FlatList
    style={styles.listContainer}
    data={props.places}
    extraData={this.props}
    keyExtractor={() => Math.random().toString()}
    renderItem={(info) => (
      <ListItem
        placeName={info.item.name}
        placeImage={info.item.image}
        onItemPressed={() => props.onItemSelected(info.item.key)}
      />
    )}
  />
);

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default PlaceList;
