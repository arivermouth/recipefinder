import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

export default function HistoryScreen({ route, navigation }) {
    const { data } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                History
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
    },
    heading:{
        marginTop: 20,
        fontSize: 20
    }
});