import React from 'react';

import {
  SafeAreaView,
  Text,
  View,
  Button,
  Alert
} from 'react-native';


function App(){
 return (
  <SafeAreaView>
     <View>
      <Text>Hello World!</Text>
      <Text>Hello World!</Text>
      <Text>Hello World!</Text>
      <Button
          title="Press me"
          onPress={() => Alert.alert('Hey! I just made my first app :)')}
        />
     </View>
  </SafeAreaView>
 )
}



export default App;
