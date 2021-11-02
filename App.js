import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text, Alert } from 'react-native';

let randomNumber = Math.floor(Math.random() * 100) + 1;

export default function App() {
  const [guessed, onChangeGuessed] = React.useState(null);
  const [text, onChangeText] = React.useState('');
  const [tulos, setTulos] = React.useState(null);
  const [lkm, setLkm] = React.useState(1);
  
  const compare = () => {
    if (randomNumber < guessed) {
      setLkm(parseInt(lkm) + 1)
      onChangeText("Your number is too big")
      onChangeGuessed(null)
    } else if (randomNumber > guessed) {
      setLkm(parseInt(lkm) + 1)
      onChangeText("Your number is too low")
      onChangeGuessed(null)
    } else if (randomNumber == guessed) {
      setLkm(parseInt(lkm) + 1)
      Alert.alert("You guessed the number in " + lkm + " guesses");
      onChangeGuessed(null)
      setLkm(1)
      onChangeText('')
    }
  }

  while (tulos != 1){
    if (tulos == 1) {
      return (
        <Text>
          Guess a number between 1-100
        </Text>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>
            Guess a number between 1-100
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={guessed => onChangeGuessed(guessed)}
            value={guessed}
            keyboardType="numeric"
          />
          <Button 
              style={styles.button}
              onPress={compare} 
              title="MAKE GUESS"
          />
          <View
            style={{
              margin: 10
            }}
          />
          <Text>
            {text}
          </Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
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

