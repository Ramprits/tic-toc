import React, { ReactElement } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { GameScreen, HomeScreen } from '@screens'

export type StackNavigatorProps = {
    Home: undefined
    Game: { gameId: string }
}
const Stack = createStackNavigator<StackNavigatorProps>()

const Navigator = (): ReactElement => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' headerMode='none'>
                <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
                <Stack.Screen name='Game' component={GameScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator
