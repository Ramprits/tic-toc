import React, { ReactElement } from 'react'
import { ScrollView, Image } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { GradientBackground, Button } from '@components'
import styles from './home.style'
import { StackNavigatorProps } from '@config/Navigator'
type HomeProps = {
  navigation: StackNavigationProp<StackNavigatorProps, 'Home'>
}
const HomeScreen = ({ navigation }: HomeProps): ReactElement => {
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../../assets/favicon.png')}
        />
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('SinglePlayerGame')}
          title='Single Player'
        />
        <Button style={styles.button} title='MultiPlayer' />
        <Button style={styles.button} title='Login' />
        <Button style={styles.button} title='Settings' />
      </ScrollView>
    </GradientBackground>
  )
}

export default HomeScreen
