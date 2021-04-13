import React, { ReactElement } from 'react'
import { StatusBar } from 'expo-status-bar'

import { StyleSheet, View } from 'react-native'
import { AppBootstrap, Text } from '@components'

const App = (): ReactElement => {
    return (
        <AppBootstrap>
            <View style={styles.container}>
                <Text>This is react native with expo project</Text>
                <StatusBar style='auto' />
            </View>
        </AppBootstrap>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
export default App
