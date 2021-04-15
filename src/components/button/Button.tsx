import React, { ReactElement } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import Text from '../Text'
import styles from './button.styles'

type HomeProps = {
  title: string
} & TouchableOpacityProps

const Button = ({ title, style, ...props }: HomeProps): ReactElement => {
  return (
    <TouchableOpacity {...props} style={[styles.button, style]}>
      <Text weight='700'> {title}</Text>
    </TouchableOpacity>
  )
}

export default Button
