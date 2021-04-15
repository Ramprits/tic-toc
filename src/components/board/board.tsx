import React, { ReactElement } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Text from '../Text'
import SafeAreaView from '../safeArea/safeAreaView'
type cell = 'x' | 'o' | null
type BoardProps = {
  state: [cell, cell, cell, cell, cell, cell, cell, cell, cell]
  size: number
  onCellPressed: (index: number) => void
}
const Board = ({ state, size, onCellPressed }: BoardProps): ReactElement => {
  return (
    <SafeAreaView>
      <View
        style={{
          width: size,
          height: size,
          backgroundColor: 'green',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {state.map((item, idx) => (
          <TouchableOpacity
            onPress={() => onCellPressed(idx)}
            key={idx}
            style={{
              width: '33.33333%',
              height: '33.33333%',
              backgroundColor: '#ffff',
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: size / 8 }} weight='700'>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  )
}

export default Board
