import { View, Text } from 'react-native'
import React from 'react'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name="index"/>
        <Stack.Screen name="activity"/>
    </Stack>
  )
}

export default _layout