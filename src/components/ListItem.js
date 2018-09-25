import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const ListItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.listItem}>
                <Text>{props.placeName}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = {
    listItem: {
        width: '100%',
        padding: 10,
        backgroundColor: '#eee',
        margin: 5
    }
};

export default ListItem;
