import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';

export default function CalculatorScreen({ navigation }) {

    const [number1, onChangeNumber1] = React.useState(null);
    const [number2, onChangeNumber2] = React.useState(null);
    const [number3, onChangeNumber3] = React.useState(null);
    const[text, setText] = useState('');
    const[data, setData] = useState([]);

    const sum = () => {
        var n1 = parseInt(number1);
        var n2 = parseInt(number2);
        var s = n1+n2;
        onChangeNumber3(s)
        setText(n1 + ' + ' + n2 + ' = ' + (n1+n2))
        setData([...data, {key:text }]);
    }
    const subtraction = () => {
        var n1 = parseInt(number1);
        var n2 = parseInt(number2);
        var s = n1-n2;
        onChangeNumber3(s)
        setText(n1 + ' - ' + n2 + ' = ' + (n1-n2))
        setData([...data, {key:text }]);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Result: {number3}
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={number1 => onChangeNumber1(number1)}
                value={number1}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={number2 => onChangeNumber2(number2)}
                value={number2}
                keyboardType="numeric"
            />
            <View style={styles.operators}>
                <View style={styles.buttonit}>
                    <Button
                        onPress={sum} 
                        title="+"
                    />
                </View>
                <View style={styles.buttonit}>
                    <Button
                        onPress={subtraction} 
                        title="-"
                    />
                </View>
                <View style={styles.buttonit}>
                    <Button
                        onPress={() => navigation.navigate('History', {data})}
                        title="History"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
    },
    heading:{
        marginTop: 20,
        fontSize: 20
    },
    input: {
        borderColor: 'grey',
        width: '50%',
        borderWidth: 1,
        margin: 5,
        padding: 5
    },
    operators: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
    buttonit: {
        width: 80
    }

});