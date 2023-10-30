import { StyleSheet, View } from 'react-native';
import React from 'react';
import { COLORS } from '../constants/Colors';
import CelsList from '../components/celsList/CelsList';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <CelsList navigation={navigation} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: COLORS.primaryLight,
    }
})