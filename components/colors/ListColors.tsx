import React from 'react';
import { View, Text, SafeAreaView,Image, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


const ListColors = ({color, btnText, addList}) => {
    return (
        <SafeAreaView style={styles.grid}>
            <View style={{width: 120, height: 120, backgroundColor: color.hex.value}} />
            <Text style={styles.text}>
                {color.name.value}
            </Text>
            <Button
                title={btnText}
                color="#10C662"
                onPress={() => addList(color)}
            />
        </SafeAreaView>
    )
}


ListColors.propType = {
    color: PropTypes.object.isRequired,
    addList: PropTypes.func.isRequired,
}

ListColors.defaultProps = {
    btnText: 'Add'
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
    text: {
        marginVertical: 4,
        fontSize: 16,
        color:'darkslateblue'
    },
    btn: {
        backgroundColor: 'red',
        padding: 25,
        margin: 6,
    },
    item: {
        alignItems: "center",
        backgroundColor: "#dcda48",
        flexGrow: 1,
        margin: 4,
        padding: 20
    }
})

export default ListColors;