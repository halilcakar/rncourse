import React from 'react';
import { Modal, View, Image, Text, Button } from 'react-native';

const PlaceDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }
  return (
    <Modal 
      onRequestClose={props.onModalClose} 
      visible={props.selectedPlace !== null} 
      animationType='slide'
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title='Delete' color='red' onPress={props.onItemDeleted} />
          <Button title='Close' onPress={props.onModalClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  modalContainer: {
    margin: 20,
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
    margin: 20
  }
};  

export default PlaceDetail;
