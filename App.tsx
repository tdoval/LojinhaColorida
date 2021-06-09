import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';

const App = () => {

  const [colors, setColors] = useState([
    {id: '1', name: 'color1', hex: '#04429A', image:"http://www.thecolorapi.com/id?format=svg&named=false&hex=04429A"},
    {id: '2', name: 'Blue Gray', hex: '#0309A2', image:"http://www.thecolorapi.com/id?format=svg&named=false&hex=0309A2"},
    {id: '3', name: 'Kingfisher Daisy', hex: '#3A02A9', image:"http://www.thecolorapi.com/id?format=svg&named=false&hex=3A02A9"},
  ]);

  return (
    <View style={styles.container} >
      <Header />
      <Text>Txto</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 40
  }
})

export default App;
