import React, { ReactElement } from 'react'
import { AppBootstrap } from '@components'
import Navigator from '@config/Navigator'

const App = (): ReactElement => {
  return (
    <AppBootstrap>
      <Navigator />
    </AppBootstrap>
  )
}

export default App
