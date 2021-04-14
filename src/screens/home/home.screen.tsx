import React, { ReactElement } from 'react'
import { ScrollView, Image } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackNavigatorProps } from '@config/Navigator'
import { GradientBackground, Button } from '@components'
import styles from './home.style'

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
                <Button />
            </ScrollView>
        </GradientBackground>
    )
}

export default HomeScreen
