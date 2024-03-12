import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

const soundFiles = [
  { name: 'Alerte générale', file: require('./assets/sounds/alerte.mp3') },
  { name: 'Noooon', file: require('./assets/sounds/non.mp3') },
  { name: 'Bravo Nils', file: require('./assets/sounds/nils.mp3') },
  { name: 'Mensonges', file: require('./assets/sounds/mensonge.mp3') },
  { name: 'Bien sûr que oui', file: require('./assets/sounds/bien-sur-que-oui.mp3') },
  { name: 'C\'est honteux', file: require('./assets/sounds/honteux.mp3') }
  // https://soundly.cc/en
];

const App = () => {
  console.log('ICI App');

  const playSound = async (sound) => {
    const { sound: soundObject } = await Audio.Sound.createAsync(sound.file);
    await soundObject.playAsync();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>mxSoundBox</Text>
      {soundFiles.map((sound, index) => (
        <TouchableOpacity key={index} onPress={() => playSound(sound)}>
          <View style={styles.button}>
            <Ionicons name="volume-high-outline" size={30} color="white" style={{ marginRight: 10 }} />
            <Text style={styles.buttonText}>{sound.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const { width } = Dimensions.get('window');
const buttonWidth = width * 0.65;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#90EE90',
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 10,
    width: buttonWidth,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;
