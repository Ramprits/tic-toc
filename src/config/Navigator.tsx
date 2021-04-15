import React, { ReactElement } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '@screens'
import { SinglePlayerScreen } from '@screens'

export type StackNavigatorProps = {
  Home: undefined
  SinglePlayerGame: undefined
}
const Stack = createStackNavigator<StackNavigatorProps>()

const Navigator = (): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' headerMode='none'>
        <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
        <Stack.Screen
          name='SinglePlayerGame'
          component={SinglePlayerScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
