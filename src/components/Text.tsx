import React, { ReactElement } from 'react'
import { Text as NativeText, TextProps as NativeTextProps } from 'react-native'

type TextProps = {
    children: React.ReactNode
    weight: '400' | '700'
} & NativeTextProps

const Text = (props: TextProps): ReactElement => {
    let fontFamily
    if (props.weight === '400') {
        fontFamily = 'Oswald_400Regular'
    }
    return <NativeText style={[{ fontFamily }]}>{props.children}</NativeText>
}

Text.defaultProps = {
    weight: '400',
}
export default Text
