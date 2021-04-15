import React, { ReactElement } from 'react'
import { Text as NativeText, TextProps as NativeTextProps } from 'react-native'

type TextProps = {
  children: React.ReactNode
  weight: '400' | '700'
} & NativeTextProps

const Text = ({ children, weight, style }: TextProps): ReactElement => {
  let fontFamily
  if (weight === '400') {
    fontFamily = 'Oswald_400Regular'
  }
  if (weight === '700') {
    fontFamily = 'Oswald_700Bold'
  }
  return <NativeText style={[{ fontFamily }, style]}>{children}</NativeText>
}

Text.defaultProps = {
  weight: '400',
}
export default Text
