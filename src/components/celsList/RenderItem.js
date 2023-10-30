import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { selectCel } from '../../features/CeluSlice';

const RenderItem = ({ item, navigation }) => {

    const dispatch = useDispatch()

    const handleSelectItem = () => {
        dispatch(selectCel(item))
        navigation.navigate("Detalles")
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handleSelectItem}>
            <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default RenderItem

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: 1,
        marginTop: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})