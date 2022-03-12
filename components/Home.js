import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, SafeAreaView, ScrollView, View, Alert, ImageBackground, Image} from 'react-native';


export default function Home() {
  return (

    <View style={styles.container}>
      <View style= {styles.image1}>
        <Image style={styles.image} 
          source={require('./../assets/imageHome.jpg')} >
        </Image>
      </View>
     
      <View style={styles.buttonContainer}>
        <Button
          title="Connexion"
          onPress={() => Alert.alert('Se connecter')}
        />
        <Button
          title="Inscription"
          color='black'
          onPress={() => Alert.alert('S\'inscrire')}
        />
      </View>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },

  image1: {
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
   width: '20vw',
    height: '60vw',
  },
  
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginBottom: 15,
    marginTop: 10
  },

});
