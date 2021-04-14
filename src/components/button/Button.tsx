import React, { ReactElement } from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from '@components'
import styles from './button.styles'

const Button = (): ReactElement => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => alert('Hi')}>
            <Text weight='700'> Single Player</Text>
        </TouchableOpacity>
    )
}

export default Button
