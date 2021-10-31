import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text, FlatList } from 'react-native';

export default function App() {
  const[text, setText] = useState('');
  const[data, setData] = useState([]);

  const add = () => {
    setData([...data, {key:text }]);
    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setText(text)}
        value={text}
        keyboardType="default"
      />
      <View style={styles.button}>
        <Button 
          style={styles.button}
          onPress={add} 
          title="ADD"
        />
        <Button 
          style={styles.button}
          onPress={data => setData([])} 
          title="CLEAR"
        />
      </View>
      <Text style={{color: 'blue', fontWeight: 'bold'}}>
        Shopping List
      </Text>
      
      <FlatList
        data={data}
        renderItem={({item}) =>
          <Text>
            {item.key}
          </Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  input: {
    width: 200,
    borderWidth: 1,
    margin: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 30,
    width: 100,
  }
});


