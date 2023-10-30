import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'
import React from 'react'
import AppNavigator from './src/navigation'
import { Provider } from 'react-redux'
import { store } from './src/store'

const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <AppNavigator />
            </SafeAreaView>
        </Provider>

    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
})
