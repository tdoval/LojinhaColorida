import React from 'react';
import { View, Text, SafeAreaView,Image, Button, StyleSheet } from 'react-native';

export default function AddItem({color, title}) {
    return (
        <SafeAreaView style={styles.grid}>
            <View />
            <View style={{width: 120, height: 120, backgroundColor: color.hex}} />
            <Text>
                {color.name}
            </Text>
            {color.available ? (<Button 
                title={title}
            />) : (<Button 
                disabled
                title='remove'
            />)}
        </SafeAreaView>
    )
}

AddItem.defaultProps = {
    title: 'Add'
}

const styles = StyleSheet.create({
    grid: {
        alignItems: "center",
        flexGrow: 1,
        margin: 4,
        padding: 20,
        flexBasis:0
    },
    image: {
        width: 50,
        height: 50,
    },
    item: {
        alignItems: "center",
        backgroundColor: "#dcda48",
        flexGrow: 1,
        margin: 4,
        padding: 20
    }
})