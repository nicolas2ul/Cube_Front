import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';


export default function User() {
    return (

        <View style={styles.container}>
            <Text>Page de profile</Text>
           
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        fontWeight: "bold",
    },

});