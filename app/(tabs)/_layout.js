//rnfe

import { View, Text } from 'react-native'
import React from 'react'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="home"/> {/*home file that exists inside of the (tabs) folder*/}
        <Tabs.Screen name="settings"/>
        <Tabs.Screen name="profile"/>
    </Tabs>
  );
};

export default _layout