import React, { ReactElement, ReactNode } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
type GradientBackgroundProps = {
  children: ReactNode
}
const GradientBackground = ({
  children,
}: GradientBackgroundProps): ReactElement => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style='light' />
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        {children}
      </LinearGradient>
    </View>
  )
}

export default GradientBackground
