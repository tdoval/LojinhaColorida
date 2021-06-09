import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './components/layout/Header';
import ListColors from './components/colors/ListColors';
import axios from 'axios';

const App = () => {

  const [color, setColor]  = useState({});
  const [colors, setColors] = useState([]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);


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
        renderItem={({item}) =>(
          <ListColors color={item} />
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
