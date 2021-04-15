import React, { ReactElement, ReactNode } from 'react'
import { Platform, SafeAreaView, StatusBar } from 'react-native'

type SafeAreaProps = {
  children: ReactNode
}
const safeAreaView = ({ children }: SafeAreaProps): ReactElement => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      {children}
    </SafeAreaView>
  )
}

export default safeAreaView
