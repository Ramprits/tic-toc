import React, { ReactElement } from 'react'
import { Board, GradientBackground, SafeAreaView } from '@components'

const SinglePlayerScreen = (): ReactElement => {
  return (
    <GradientBackground>
      <SafeAreaView>
        <Board
          onCellPressed={(index) => alert(index)}
          size={300}
          state={['x', 'o', 'x', 'x', 'o', null, 'x', 'o', 'o']}
        />
      </SafeAreaView>
    </GradientBackground>
  )
}

export default SinglePlayerScreen
