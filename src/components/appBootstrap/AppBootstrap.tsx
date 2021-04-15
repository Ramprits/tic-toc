import React, { ReactElement, ReactNode } from 'react'
import {
  useFonts,
  Oswald_400Regular,
  Oswald_700Bold,
} from '@expo-google-fonts/oswald'
import AppLoading from 'expo-app-loading'

type AppBootstrapProps = {
  children: ReactNode
}
const AppBootstrap = (props: AppBootstrapProps): ReactElement => {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Oswald_700Bold,
  })
  return fontsLoaded ? <>{props.children}</> : <AppLoading />
}

export default AppBootstrap
