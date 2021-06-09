import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './components/layout/Header';
import ListColors from './components/colors/ListColors';
import ListCart from './components/cart/ListCart';
import axios from 'axios';

const App = () => {

  const [colors, setColors] = useState([]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const Separator = () => (
    <View style={styles.separator} />
  );

  const addList = (obj) =>{
    setList(prevItems =>  {
      return [{id: obj.hex.clean, hex:obj.hex.value, name: obj.name.value},...prevItems];
    });
  }

  //Get Colors Scheme
  useEffect(()=> {
    setLoading(true);
    axios.get('https://www.thecolorapi.com/scheme?hex=2842AB&format=json&mode=analogic&count=6')
    .then((response => setColors(response.data.colors)), setLoading(false));
  }, [])

  return (
    <View style={styles.container} >
      <Header />
      <FlatList 
        data={colors}
        numColumns={2}
        keyExtractor={(item, index) => (item.hex.value)}
        renderItem={({item}) =>(
          <ListColors color={item} addList={addList} />
        )} 
        />
        <Separator />
        <Text>Produtos Adicionados:</Text>
      <FlatList 
        data={list}
        renderItem={({item}) =>(
          <ListCart item={item} />
        )} 
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 40
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
})

export default App;
