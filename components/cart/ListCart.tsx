import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import PropTypes from 'prop-types'


const ListCart = ({item, deleteList}) => {
    return (
        <TouchableHighlight style={styles.listItem}>
            <View style={styles.listItemView}>
            <View style={{width: 30, height: 30, backgroundColor: item.hex}} />
                <Text style={styles.listItemText}>{item.name}</Text>
                <AntDesign name="closecircleo" size={24} color="red" onPress={() => deleteList(item.id)}  />
            </View>
        </TouchableHighlight>
    )
}

ListCart.propType = {
    item: PropTypes.object.isRequired,
    deleteList: PropTypes.func.isRequired,
}

const styles =  StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 18
    }

})

export default ListCart;