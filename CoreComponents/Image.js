import React from 'react';
import { Image, View } from 'react-native';
const image = require('./react-native.jpg');

const App = () => (
  // eslint-disable-next-line
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <Image style={{ width: 100, height: 100 }} source={{ image }} />
  </View>
);

export default App;
