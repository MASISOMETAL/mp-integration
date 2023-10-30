import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import RenderItem from './RenderItem'
import { useSelector } from 'react-redux'

const CelsList = ({navigation}) => {

    const Cels = useSelector(state=> state.celSlice.cels)

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={Cels}
                keyExtractor={item => item.id.toString()}
                renderItem={({item})=> <RenderItem item={item} navigation={navigation} />}
            />
        </View>
    )
}

export default CelsList

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: 'center',
    },
    flatList: {
        width: "80%",
    }
})