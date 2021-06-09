import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Lojinha</Text>
            <AntDesign name="shoppingcart" size={28} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor:'#10c662',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: 'black',
        fontSize:23,
    }
})

export default Header;
