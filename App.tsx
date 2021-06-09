import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import AddItem from './components/AddItem';

const App = () => {

  const [colors, setItems] = useState([
    {id: '1', available:true, name: 'color1', hex: '#04429A', uriImage:"http://www.thecolorapi.com/id?format=svg&named=false&hex=04429A"},
    {id: '2', available:false, name: 'Blue Gray', hex: '#0309A2', uriImage:"http://www.thecolorapi.com/id?format=svg&named=false&hex=BE4C67"},
    {id: '3', available:true, name: 'Kingfisher Daisy', hex: '#3A02A9', uriImage:"http://www.thecolorapi.com/id?format=svg&named=false&hex=3A02A9"},
  ]);

  return (
    <View style={styles.container} >
      <Header />
      <FlatList 
        data={colors}
        numColumns={2}
        renderItem={({item}) =>(
          <AddItem color={item} />
        )} 
        />
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
